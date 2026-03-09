---
theme: default
title: Fraud Detection Baseline Revised - 模型訓練簡報
info: |
  根據 baseline_model_revised.md 與 baseline_model_revised.ipynb 整理
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Fraud Detection Model Training

## Baseline Revised 實作簡報

<div class="pt-8 opacity-70">
  目標：說清楚「我們怎麼訓練模型」
</div>

---
layout: default
---

# 簡報大綱

1. 問題定義與評估目標
2. 資料切分策略（避免 leakage）
3. 特徵工程與前處理
4. Stage A/B/C 訓練流程
5. 模型訓練（Logit / DT / LightGBM / XGBoost）
6. 閾值掃描與風險分級
7. 最終模型選擇與落地

---
layout: default
---

# 1) 問題定義：極度不平衡詐欺偵測

- 資料量約 **6,362,620** 筆，`isFraud` 正類比例約 **0.129%**
- 主要商業目標：
  - **降低漏報（Recall 優先）**
  - 並透過風險分級支援審核資源配置

<Keynote title="核心觀念">

這不是 Accuracy 問題，而是 Precision-Recall trade-off 問題。

</Keynote>

---
layout: default
---

# 2) 評估指標：不看 Accuracy，看 PR

<MathBox title="Primary 指標">

- **PR-AUC**

</MathBox>

<Keynote title="Secondary 指標">

- ROC-AUC
- Precision / Recall / F1（在不同 threshold）
- Confusion Matrix

</Keynote>

<MathBox title="決策層輸出">

- **Risk Tier：Low / Medium / High**
- 每層級的 volume、fraud rate、fraud capture

</MathBox>

---
layout: default
---

# 3) 固定時間切分（方法正確性）

依 `step` 排序後切分（不是 random split）：

- **Train**：前 70%
- **Valid**：中間 15%
- **Test**：後 15%

<Keynote title="優點">

- 避免未來資訊洩漏到訓練
- 更接近真實上線情境（用過去預測未來）

</Keynote>

---
layout: default
---

# 4) Stage A/B/C：筆電友善迭代策略

在固定時間切分下，只調整 Train 使用比例：

- **Stage A**：20%（快速迭代）
- **Stage B**：50%（穩健驗證）
- **Stage C**：100%（最終版）

訓練子集做分層抽樣（維持 fraud 比例），Valid/Test 維持固定框架。

---
layout: default
---

# 5) 特徵工程（Baseline Revised）

**基礎特徵**
- 數值：`step`, `amount`, `oldbalanceOrg`, `newbalanceOrig`, `oldbalanceDest`, `newbalanceDest`
- 類別：`type`

**衍生特徵**
- `deltaOrig = oldbalanceOrg - newbalanceOrig`
- `deltaDest = newbalanceDest - oldbalanceDest`
- `isOrigBalanceZero`
- `isDestBalanceZero`

**敏感度設計**
- `isFlaggedFraud` 可切換是否納入（ablation）

---
layout: default
---

# 6) 前處理設計：線性 vs 樹模型分流

**Logistic Regression pipeline**
- Numeric: `StandardScaler()`
- Categorical: `OneHotEncoder(handle_unknown='ignore')`
- 透過 `ColumnTransformer` 整合

**Tree/Boosting pipeline**
- 通常不需標準化
- 類別仍做 one-hot（與既有流程一致）

這樣可以同一份資料流程，公平比較不同模型家族。

---
layout: default
---

# 7) 模型訓練設定（Notebook 實際配置）

- **Logistic Regression**
  - `class_weight='balanced'`
  - `max_iter=1000`, `solver='saga'`

- **Decision Tree**
  - `max_depth=8`, `min_samples_leaf=200`
  - `class_weight='balanced'`

- **LightGBM**
  - `objective='binary'`
  - `n_estimators=300`, `learning_rate=0.05`
  - `num_leaves=31`, `min_child_samples=100`
  - `subsample=0.8`, `colsample_bytree=0.8`
  - `scale_pos_weight = neg/pos`

- **XGBoost**
  - `objective='binary:logistic'`, `eval_metric='aucpr'`
  - `n_estimators=300`, `learning_rate=0.05`
  - `max_depth=6`, `min_child_weight=5`
  - `subsample=0.8`, `colsample_bytree=0.8`
  - `scale_pos_weight = neg/pos`

---
layout: default
---

# 8) 訓練與驗證流程（每個模型都一致）

1. fit on `X_train, y_train`
2. 產生 `valid_probs` / `test_probs`
3. 在 Valid：
   - PR 曲線
   - PR-AUC / ROC-AUC
   - confusion matrix + classification report
   - threshold 掃描表
4. 將模型結果彙總成 validation comparison

<Keynote title="重點">

先在 Valid 做決策，再鎖定規則到 Test。

</Keynote>

---
layout: default
---

# 9) Threshold 掃描與營運對齊

Notebook 預設掃描：
`(0.01, 0.02, 0.05, 0.10, 0.20, 0.30, 0.50)`

每個 threshold 輸出：
- precision
- recall
- f1
- predicted_positive（審核量代理）

用途：
- 用數據決定「可承受的審核量」與「可接受的漏報」平衡點。

---
layout: default
---

# 10) 風險分級（Risk Tier）

以機率切三層：
- Low: `prob < t_mid`
- Medium: `t_mid <= prob < t_high`
- High: `prob >= t_high`

Notebook 例：
- `SELECT_THRESHOLD = 0.10`（測試評估門檻）
- tier function 可用 `t_mid=0.10`, `t_high=0.30`

對業務的價值：
- High：優先人工審核
- Medium：次優先或追加規則
- Low：自動放行/低頻抽查

---
layout: default
---

# 11) 最終模型選擇邏輯

在 Valid 依 PR-AUC 排序，選最佳模型：
- `Logistic (Valid)`
- `DecisionTree (Valid)`
- `LightGBM (Valid)`
- `XGBoost (Valid)`

再將最佳模型固定 threshold 後到 Test 評估。

<MathBox title="原則">

指標最佳 + 風險分級可操作 + 計算成本可接受

</MathBox>

---
layout: default
---

# 12) 建議實際執行節奏

- **第一輪（1~2 小時）**：Stage A
  - 快速檢查資料流、特徵、模型是否可跑
- **第二輪（半天）**：Stage B
  - 驗證 PR-AUC 與 threshold 穩定性
- **第三輪（資源允許）**：Stage C
  - 逼近最終可上線策略

這能在資源受限下，兼顧速度與方法正確性。

---
layout: default
---

# 13) 面試可直接講的版本（60 秒）

我們先用時間切分確保方法正確，再用 Stage A/B/C 的資料放大策略提升迭代效率。模型以 Logistic 當穩定 baseline，搭配 LightGBM/XGBoost 做效果上限比較；全程用 PR-AUC 與 threshold 掃描決策，不依賴 Accuracy。最後把輸出轉成 Low/Medium/High 風險分級，讓模型結果能對接實際審核容量與流程。

---
layout: end
---

# Thank You

## Q & A
