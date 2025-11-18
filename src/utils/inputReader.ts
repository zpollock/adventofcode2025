import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readInput(day: number, part: 1 | 2): string {
  const basePath = path.join(__dirname, '../../inputs');
  const partFile = path.join(basePath, `day${day}_part${part}.txt`);
  const sharedFile = path.join(basePath, `day${day}.txt`);

  // Try part-specific file first
  if (fs.existsSync(partFile)) {
    const content = fs.readFileSync(partFile, 'utf-8').trim();
    if (content.length > 0) {
      return content;
    }
  }
  
  // Fall back to shared file
  if (fs.existsSync(sharedFile)) {
    const content = fs.readFileSync(sharedFile, 'utf-8').trim();
    if (content.length > 0) {
      return content;
    }
  }
  
  throw new Error(
    `No valid input file found for Day ${day} Part ${part}. ` +
    `Tried: ${partFile} and ${sharedFile} (files may be empty)`
  );
}