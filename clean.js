import fs from 'fs';
import path from 'path';

const targets = ['dist', 'server.js'];

targets.forEach((target) => {
  const targetPath = path.join(process.cwd(), target);
  try {
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`Successfully removed: ${target}`);
    }
  } catch (error) {
    console.error(`Error cleaning target ${target}:`, error);
  }
});
