module.exports = {

    handle: (req, res) => {
        res.json({
            server: "SiteWebPerso-Server",
            status: "online",
            timestamp: new Date().toISOString()
        });
    }
};
