import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// ESM compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SLIDES_DIR = path.resolve(__dirname, '../slides');
const PAGES_DIR = path.resolve(__dirname, '../slide_view/public');

// Extensions to look for
const EXTENSIONS = ['.md'];

/**
 * Recursively find all files with specific extensions in a directory.
 */
function findSlides(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        findSlides(filePath, fileList);
      }
    } else {
      if (EXTENSIONS.includes(path.extname(file))) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}


function build() {
  console.log(`Scanning for slides in ${SLIDES_DIR}...`);
  if (!fs.existsSync(SLIDES_DIR)) {
    console.error(`Slides directory not found: ${SLIDES_DIR}`);
    process.exit(1);
  }

  const slideFiles = findSlides(SLIDES_DIR);

  if (slideFiles.length === 0) {
    console.log('No slides found.');
    return;
  }

  console.log(`Found ${slideFiles.length} slide(s).`);

  // Ensure pages directory exists
  if (!fs.existsSync(PAGES_DIR)) {
    fs.mkdirSync(PAGES_DIR, { recursive: true });
  }

  const vercelRewrites = [];

  slideFiles.forEach((slidePath, index) => {
    // Calculate relative path from slides dir
    const relativePath = path.relative(SLIDES_DIR, slidePath);
    
    // Determine output directory parts
    const pathParts = path.parse(relativePath);
    
    // Generate output path mapping
    // slides/A/B.md -> pages/A/B (directory)
    const relativeOutDir = path.join(pathParts.dir, pathParts.name);
    const outDir = path.join(PAGES_DIR, relativeOutDir);

    // Clean old slide output if it exists to prevent stale files
    if (fs.existsSync(outDir)) {
      console.log(`Cleaning old output for slide: ${outDir}`);
      fs.rmSync(outDir, { recursive: true, force: true });
    }
    
    // Base URL for Vercel deployment
    const urlBasePath = relativeOutDir.split(path.sep).join('/');
    const urlBase = '/' + urlBasePath + '/';

    console.log(`[${index + 1}/${slideFiles.length}] Building ${relativePath}...`);
    console.log(`  -> Output: ${outDir}`);
    console.log(`  -> URL Base: ${urlBase}`);

    try {
      // Build command
      execSync(`pnpm exec slidev build "${slidePath}" --out "${outDir}" --base "${urlBase}"`, {
        stdio: 'inherit',
        env: { ...process.env }
      });
      
    } catch (error) {
      console.error(`Failed to build ${relativePath}`);
      process.exit(1);
    }
  });

  console.log('All builds completed successfully!');
}

build();
