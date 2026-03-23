import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const MAX_FILE_SIZE_BYTES = 500 * 1024; // 500 KB thresholds
const MAX_WIDTH = 1920;

async function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                await processImage(fullPath, ext);
            }
        }
    }
}

async function processImage(filePath, ext) {
    try {
        const stats = fs.statSync(filePath);
        if (stats.size > MAX_FILE_SIZE_BYTES) {
            console.log(`Optimizing: ${filePath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
            
            // Read file into memory buffer to avoid file lock issues when overwriting
            const imageBuffer = fs.readFileSync(filePath);
            
            let pipeline = sharp(imageBuffer).resize({
                width: MAX_WIDTH,
                withoutEnlargement: true,
            });

            if (ext === '.png') {
                // High compression for PNGs, palette reduction can help massive sizes
                pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
            } else if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({ quality: 80, progressive: true });
            }

            await pipeline.toFile(filePath);
            
            const newStats = fs.statSync(filePath);
            console.log(`  -> ✅ Reduced to ${(newStats.size / 1024).toFixed(2)} KB`);
        }
    } catch (err) {
        console.error(`  -> ❌ Error processing ${filePath}:`, err);
    }
}

async function main() {
    console.log('Starting image optimization...');
    await processDirectory(PUBLIC_DIR);
    console.log('Image optimization complete.');
}

main();
