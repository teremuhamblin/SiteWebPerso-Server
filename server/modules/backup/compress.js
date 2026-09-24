const fs = require('fs');
const zlib = require('zlib');

module.exports = {

    compress: (filePath) => {
        const file = fs.readFileSync(filePath);
        const compressed = zlib.gzipSync(file);

        const outPath = filePath + '.gz';
        fs.writeFileSync(outPath, compressed);

        return outPath;
    }
};
