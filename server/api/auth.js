module.exports = {

    login: (req, res) => {
        const { token } = req.body;

        if (token !== process.env.SERVER_TOKEN) {
            return res.status(403).json({ error: "Token invalide" });
        }

        res.json({ status: "ok", message: "Authentification réussie" });
    }
};
