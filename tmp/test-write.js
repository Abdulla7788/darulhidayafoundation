const fs = require('fs');
const path = require('path');

const uploadDir = path.join(process.cwd(), 'public', 'gallery');
const testFile = path.join(uploadDir, 'test-write.txt');

try {
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    fs.writeFileSync(testFile, 'Test write at ' + new Date().toISOString());
    console.log('Successfully wrote to:', testFile);
    fs.unlinkSync(testFile);
    console.log('Successfully deleted test file.');
} catch (err) {
    console.error('File write test failed:', err);
}
