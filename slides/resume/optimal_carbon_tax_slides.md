---
theme: default
background: https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 最適碳稅與資源重分配
  碩士論文簡報
drawings:
  persist: false
transition: slide-left
title: Optimal Carbon Tax and Resource Reallocation
mdc: true
math: katex
---

# 兩部門異質性廠商下的最適碳稅與資源重分配
## Optimal Carbon Tax and Resource Reallocation

<div class="pt-12">
  <span class="px-2 py-1 bg-green-600/80 text-white rounded mr-2 text-sm">經濟學系 碩士論文</span>
  <span class="px-2 py-1 bg-white/80 text-black rounded text-sm">國立臺灣大學</span>
</div>

<div class="abs-bl m-6 flex flex-col items-start gap-1">
  <span class="text-sm font-bold opacity-80 backdrop-blur bg-black/30 px-2 py-1 rounded">作者：許峻瑋 (Chun-Wei Hsu)</span>
  <span class="text-sm font-bold opacity-80 backdrop-blur bg-black/30 px-2 py-1 rounded">指導教授：蔡宜展 博士</span>
</div>

---
layout: default
transition: fade
---

# 摘要與研究動機 (Introduction)

氣候變遷是當前的嚴峻挑戰，碳稅被認為是減少溫室氣體的有效市場機制。然而，現實中政府常為了減輕企業負擔或獲得政治支持，設定「**碳稅豁免**」或「**差異化稅率**」。

<div class="grid grid-cols-2 gap-6 mt-8">
  <v-click>
  <div class="bg-blue-500/10 p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
    <div class="text-3xl mb-2 i-carbon-earth-europe-africa text-blue-500"></div>
    <div class="font-bold text-lg mb-2 text-blue-300">實際案例</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li><strong>瑞典 (1991)</strong>：碳稅對工業給予減半優惠，甚至豁免採礦業。</li>
      <li><strong>歐盟 (EU ETS)</strong>：允許年排放低於 25,000 噸的小型設施豁免。</li>
    </ul>
  </div>
  </v-click>

  <v-click>
  <div class="bg-green-500/10 p-6 rounded-lg shadow-sm border-t-4 border-green-500">
    <div class="text-3xl mb-2 i-carbon-help text-green-500"></div>
    <div class="font-bold text-lg mb-2 text-green-300">核心研究問題</div>
    <ul class="text-sm text-gray-300 space-y-2">
      <li>碳稅機制的設計 (如涵蓋範圍、差異化稅率) 如何影響<strong>總體經濟</strong>與<strong>環境表現</strong>？</li>
      <li>豁免政策是否會<strong>扭曲資源配置</strong>，降低氣候政策的整體效率？</li>
    </ul>
  </div>
  </v-click>
</div>

---
layout: default
---

# 模型架構 (1) 總體經濟環境與最終生產

擴充 Restuccia and Rogerson (2009) 的框架，建立包含**異質性廠商**的多部門一般均衡模型：

<div class="mt-8 space-y-4">
  <v-click>
  <div class="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
    <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
      <div class="i-carbon-user-multiple"></div>
    </div>
    <div>
      <h3 class="font-bold text-blue-300 m-0">家計單位 (Consumers)</h3>
      <p class="text-sm text-gray-300 m-0 mt-1">代表性家計單位極大化跨期消費效用。預算限制包含勞動與資本報酬、企業利潤，並接收<strong>政府的碳稅一次性移轉補貼</strong>。</p>
    </div>
  </div>
  </v-click>

  <v-click>
  <div class="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
    <div class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
      <div class="i-carbon-industry"></div>
    </div>
    <div>
      <h3 class="font-bold text-orange-300 m-0">最終財生產者 (Final Good Producers)</h3>
      <p class="text-sm text-gray-300 m-0 mt-1">在完全競爭市場下運作。使用 <strong>CES</strong> 生產函數，將各部門的中間財聚合為最終商品。</p>
    </div>
  </div>
  </v-click>

  <v-click>
  <div class="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
    <div class="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-2xl">
      <div class="i-carbon-temperature-hot"></div>
    </div>
    <div>
      <h3 class="font-bold text-red-300 m-0">氣候環境損害 (Climate Damage)</h3>
      <p class="text-sm text-gray-300 m-0 mt-1">借鑒 Golosov et al. (2014)，碳排累積提高碳濃度，對最終產出造成<strong>指數型遞減</strong>的損失，環境外部性直接影響可消費產出。</p>
    </div>
  </div>
  </v-click>
</div>

---
layout: default
---

# 模型架構 (2) 異質性廠商與碳排放設定

<div class="grid grid-cols-3 gap-4 mt-8">
  <v-click>
  <div class="col-span-1 bg-gray-800 p-5 rounded-lg border-l-4 border-indigo-400">
    <div class="text-2xl mb-2 i-carbon-chart-multitype text-indigo-400"></div>
    <h3 class="font-bold text-indigo-300 text-lg mb-2">中間財部門</h3>

細分為四個部門：工業、商業、運輸、公用事業。<br/><br/>各具有獨立的**碳排放因子** (Emission Factor: $\phi_l$)。

  </div>
  </v-click>

  <v-click>
  <div class="col-span-1 bg-gray-800 p-5 rounded-lg border-l-4 border-teal-400">
    <div class="text-2xl mb-2 i-carbon-data-vis-1 text-teal-400"></div>
    <h3 class="font-bold text-teal-300 text-lg mb-2">生產力異質性</h3>

部門內異質廠商生產力 $s$ 服從對數常態分配。<br/><br/>
假設**規模報酬遞減** ($\alpha_l + \beta_l + \gamma_l < 1$)，確保不同規模生產力廠商共存。

  </div>
  </v-click>

  <v-click>
  <div class="col-span-1 bg-gray-800 p-5 rounded-lg border-l-4 border-rose-400">
    <div class="text-2xl mb-2 i-carbon-policy text-rose-400"></div>
    <h3 class="font-bold text-rose-300 text-lg mb-2">碳稅機制</h3>

課徵碳稅 $\tau_t^{CE}$ 後，有效能源價格上升為 $\nu_t^E + \tau_t^{CE} \phi_l$。<br/><br/>
碳稅改變相對價格，驅動**要素重分配 (Resource reallocation)**。
  </div>
  </v-click>
</div>

---
layout: two-cols
---

# 資料校準 (Calibration)

使用 **2019 年歐盟 27 國**的資料進行校準：

<div class="mt-6 space-y-4">
  <div class="bg-white/5 p-4 rounded border-l-2 border-blue-400">
    <div class="font-bold text-blue-300 flex items-center gap-2">
      <div class="i-carbon-flash"></div> 投入密集度
    </div>
    <div class="text-sm mt-1 text-gray-300">從 EU KLEMS / Eurostat 估算。公用事業有極高的能源密集度與排放因子(11.87)。</div>
  </div>
  <div class="bg-white/5 p-4 rounded border-l-2 border-green-400">
    <div class="font-bold text-green-300 flex items-center gap-2">
      <div class="i-carbon-store"></div> 廠商規模分佈
    </div>
    <div class="text-sm mt-1 text-gray-300">商業部門微型企業(0-9人)家數占 94.15%，產出佔 31.97%，顯示高度零碎化。</div>
  </div>
  <div class="bg-white/5 p-4 rounded border-l-2 border-red-400">
    <div class="font-bold text-red-300 flex items-center gap-2">
      <div class="i-carbon-warning-alt"></div> 氣候損害
    </div>
    <div class="text-sm mt-1 text-gray-300">採用 Golosov et al. (2014) 的基準參數化總體經濟損害函數。</div>
  </div>
</div>

::right::

<div class="pl-8 pt-12 flex flex-col justify-center h-full">
  <h3 class="mb-4 text-xl font-bold flex items-center gap-2">
    <div class="i-carbon-test-tool"></div>
    四種碳稅情境分析
  </h3>
  
  <div class="space-y-3">
    <v-click>
    <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
      <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">1</div>
      <div class="text-lg"><strong>統一碳稅</strong> (Uniform tax)</div>
    </div>
    </v-click>
    <v-click>
    <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
      <div class="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-bold">2</div>
      <div class="text-lg"><strong>差異化碳稅</strong> (Heterogeneous tax)</div>
    </div>
    </v-click>
    <v-click>
    <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
      <div class="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold">3</div>
      <div class="text-lg"><strong>部門豁免</strong> (Sectoral exemption)</div>
    </div>
    </v-click>
    <v-click>
    <div class="flex items-center gap-4 bg-gray-800 p-3 rounded-lg">
      <div class="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold">4</div>
      <div class="text-lg"><strong>小型排放源豁免</strong><br/>(Small emitters exemption)</div>
    </div>
    </v-click>
  </div>
</div>

---
layout: default
---

# 研究結果：統一碳稅與差異化碳稅

<div class="grid grid-cols-2 gap-8 mt-8">
  <v-click>
  <div class="bg-gradient-to-br from-blue-900/50 to-blue-800/10 p-6 rounded-xl border border-blue-500/30">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-2xl font-bold text-blue-300 m-0">統一碳稅</h3>
      <div class="text-4xl i-carbon-scale text-blue-400"></div>
    </div>
    <ul class="space-y-3 text-gray-200">
      <li>在最適稅率下，相較於無碳稅基期，可減少 <strong class="text-blue-300 text-xl">73%</strong> 碳排放。</li>
      <li>生產成本上升導致未受損產出下降，但氣候損害大幅減輕。</li>
      <li class="bg-blue-500/20 p-2 rounded mt-4 border-l-2 border-blue-400">
        最終使<strong>長期消費水準提升 4.13%</strong>
      </li>
    </ul>
  </div>
  </v-click>

  <v-click>
  <div class="bg-gradient-to-br from-teal-900/50 to-teal-800/10 p-6 rounded-xl border border-teal-500/30">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-2xl font-bold text-teal-300 m-0">差異化碳稅</h3>
      <div class="text-4xl i-carbon-chart-custom text-teal-400"></div>
    </div>
    <ul class="space-y-3 text-gray-200">
      <li>依據部門特性調整稅率：高碳排部門高負擔，低碳排部門低負擔。</li>
      <li>降低對高生產力部門的衝擊，整體福祉 (Welfare) 可獲得最高水準的提升。</li>
      <li class="bg-teal-500/20 p-2 rounded mt-4 border-l-2 border-teal-400">
        達到最高表現：<strong>長期消費增加 4.22%</strong>
      </li>
    </ul>
  </div>
  </v-click>
</div>

---
layout: default
---

# 研究結果：豁免機制的效率損失

<div class="mt-8 space-y-6">
  <v-click>
  <div class="bg-white/5 p-5 rounded-lg border-l-4 border-orange-500 relative overflow-hidden">
    <div class="absolute right-0 top-0 opacity-10 text-9xl i-carbon-industry -mt-4 mr-4"></div>
    <h3 class="font-bold text-orange-400 text-xl mb-3 flex items-center gap-2">
      <div class="i-carbon-warning"></div>
      部門豁免 (Sectoral Exemption)
    </h3>
    <ul class="text-gray-200 space-y-2 relative z-10 w-4/5">
      <li>豁免高污染的<strong>工業部門</strong>會大幅削弱減碳效果 (僅減排 22.2%)，導致巨額的氣候損害與福祉損失。</li>
      <li>若改豁免「低污染且高生產力」的<strong>商業部門</strong>，能引導資源流向該部門，維持經濟產出的同時兼顧減碳。</li>
    </ul>
  </div>
  </v-click>

  <v-click>
  <div class="bg-white/5 p-5 rounded-lg border-l-4 border-red-500 relative overflow-hidden">
    <div class="absolute right-0 top-0 opacity-10 text-9xl i-carbon-store -mt-4 mr-4"></div>
    <h3 class="font-bold text-red-400 text-xl mb-3 flex items-center gap-2">
      <div class="i-carbon-error"></div>
      小型排放源豁免 (Exempting Small Emitters)
    </h3>
    <div class="grid grid-cols-2 gap-4 relative z-10">
      <div class="bg-black/20 p-3 rounded">
        <div class="font-bold text-red-300 mb-1">部門內效應</div>
        <p class="text-sm text-gray-300 m-0">將資源流向免稅但低生產力的小廠商，造成整體產業的要素生產力 (TFP) 下降。</p>
      </div>
      <div class="bg-black/20 p-3 rounded">
        <div class="font-bold text-red-300 mb-1">部門間效應</div>
        <p class="text-sm text-gray-300 m-0">商業部門小廠商多，大量免稅造成跨部門不平衡；未豁免企業需承擔極高稅率，導致整體經濟衰退。</p>
      </div>
    </div>
  </div>
  </v-click>
</div>

---
layout: center
class: text-center
background: https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2070&auto=format&fit=crop
---

<div class="bg-black/60 p-10 rounded-2xl backdrop-blur-md shadow-2xl inline-block max-w-3xl border border-white/10">

# 結論 (Conclusion) 

<div class="text-lg text-gray-200 mt-6 leading-relaxed space-y-4">

<p class="font-bold text-green-400 text-xl">
「碳稅能有效減少碳排並引導生產要素重分配」
</p>

<p>
為了達到最佳的減碳與經濟雙贏，<br/>
<strong class="text-white px-2 py-1 bg-green-600/50 rounded">維持廣泛的稅基 (統一碳稅或差異化碳稅)</strong> 是最有效率的做法。
</p>

<p class="text-red-300 mt-6">
建立在<strong>企業規模</strong>或<strong>特定高污染部門</strong>的豁免機制，<br/>
不僅會削弱減碳效力，更會引發資源錯置與整體福祉損失。
</p>

</div>

<div class="mt-8 pt-6 border-t border-white/20">
  <span class="text-gray-400 text-sm">Thank you for listening!</span>
</div>

</div>

