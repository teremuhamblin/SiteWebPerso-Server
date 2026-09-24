/**
 * SiteWebPerso-Server — Core Server
 * SG@Art — 2026
 */

const express = require('express');
const app = express();
const router = require('./router');
const middleware = require('./middleware');

// Middleware global
app.use(middleware.securityHeaders);
app.use(middleware.jsonParser);
app.use(middleware.logger);

// Routes API
app.use('/api', router);

// Interface web
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`[SERVER] SiteWebPerso-Server opérationnel sur le port ${PORT}`);
});
