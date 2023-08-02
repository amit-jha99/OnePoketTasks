const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        const words = data.split(/\s+/);
        const wordCount = words.length;
        console.log('Word count:', wordCount);
    }
});
