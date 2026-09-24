const express = require('express');
const router = express.Router();

const upload = require('../api/upload');
const download = require('../api/download');
const restore = require('../api/restore');
const status = require('../api/status');
const auth = require('../api/auth');

// Auth
router.post('/auth', auth.login);

// Backup Engine
router.post('/upload', upload.handle);
router.get('/download/:file', download.handle);
router.post('/restore', restore.handle);

// Status
router.get('/status', status.handle);

module.exports = router;
