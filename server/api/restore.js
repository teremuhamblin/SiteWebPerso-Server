const restoreEngine = require('../modules/backup/restore');

module.exports = {

    handle: (req, res) => {
        const { fileName } = req.body;

        const filePath = `storage/incremental/${fileName}`;
        const result = restoreEngine.restore(filePath);

        res.json(result);
    }
};
