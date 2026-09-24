const path = require('path');

module.exports = {

    handle: (req, res) => {
        const fileName = req.params.file;
        const filePath = path.join(__dirname, '../../storage/incremental/', fileName);

        res.download(filePath);
    }
};
