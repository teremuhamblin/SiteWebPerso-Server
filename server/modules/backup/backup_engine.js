const fs = require('fs');
const path = require('path');

module.exports = {

    saveFile: (fileBuffer, fileName) => {
        const savePath = path.join(__dirname, '../../../storage/incremental/', fileName);

        fs.writeFileSync(savePath, fileBuffer);

        return {
            status: "ok",
            message: "Fichier sauvegardé",
            path: savePath
        };
    }
};
