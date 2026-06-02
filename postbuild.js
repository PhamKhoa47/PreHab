import fs from 'fs';
import path from 'path';

const src = path.join(process.cwd(), 'dist', 'index.html');
const dest = path.join(process.cwd(), 'dist', '404.html');
const nojekyll = path.join(process.cwd(), 'dist', '.nojekyll');

try {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied index.html to 404.html for SPA support on GitHub Pages!');
  } else {
    console.warn('dist/index.html not found. Skipping 404.html generation.');
  }

  // Create .nojekyll to prevent GitHub Pages from ignoring files that begin with an underscore
  fs.writeFileSync(nojekyll, '');
  console.log('Successfully created .nojekyll file.');
} catch (error) {
  console.error('Error during postbuild script:', error);
}
