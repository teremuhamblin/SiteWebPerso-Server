const fs = require('fs');

module.exports = {

    restore: (filePath) => {
        if (!fs.existsSync(filePath)) {
            return { status: "error", message: "Fichier introuvable" };
        }

        return {
            status: "ok",
            file: fs.readFileSync(filePath)
        };
    }
};
