const fs = require('fs');
const path = require('path');

module.exports = {

    jsonParser: require('express').json(),

    securityHeaders: (req, res, next) => {
        res.setHeader('X-Server-Name', 'SiteWebPerso-Server');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        next();
    },

    logger: (req, res, next) => {
        const logLine = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
        fs.appendFileSync(path.join(__dirname, '../modules/logs/access.log'), logLine);
        next();
    }
};
