const backupEngine = require('../modules/backup/backup_engine');

module.exports = {

    handle: (req, res) => {
        const { fileName, fileData } = req.body;

        if (!fileName || !fileData) {
            return res.status(400).json({ error: "Paramètres manquants" });
        }

        const buffer = Buffer.from(fileData, 'base64');
        const result = backupEngine.saveFile(buffer, fileName);

        res.json(result);
    }
};
