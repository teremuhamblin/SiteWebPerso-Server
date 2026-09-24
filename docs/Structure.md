# 🧱 STRUCTURE
- SiteWebPerso-Server
```text
SiteWebPerso-Server/
│
├── README.md
├── .github/
│   ├── .gitkeep
│
├── docs/
│   ├── README.md
│   ├── install.md
│   ├── api_reference.md
│   ├── backup_engine.md
│   └── server_config.md
│
├── css/
│   ├── README.md
│   └── admin.css
│
├── public/
│   ├── index.html
│   ├── dashboard.html
│   ├── logs.html
│   ├── backups.html
│   └── assets/
│       ├── logo.png
│       └── icons/
│
├── server/
│   ├── config/
│   │   ├── server.conf
│   │   ├── nginx.conf
│   │   └── security.conf
│   │
│   ├── core/
│   │   ├── server.js
│   │   ├── router.js
│   │   └── middleware.js
│   │
│   ├── modules/
│   │   ├── backup/
│   │   │   ├── backup_engine.js
│   │   │   ├── compress.js
│   │   │   └── restore.js
│   │   │
│   │   ├── auth/
│   │   │   ├── token.js
│   │   │   └── verify.js
│   │   │
│   │   ├── logs/
│   │   │   ├── access.log
│   │   │   └── server.log
│   │   │
│   │   └── monitor/
│   │       ├── monitor.js
│   │       └── alerts.js
│   │
│   └── api/
│       ├── upload.js
│       ├── download.js
│       ├── restore.js
│       ├── status.js
│       └── auth.js
│
├── storage/
│   ├── archives/
│   ├── incremental/
│   └── temp/
│
├── scripts/
│   ├── backup_now.sh
│   ├── clean_temp.sh
│   └── rotate_tokens.sh
│
├── tests/
│   ├── api.test.js
│   ├── backup.test.js
│   └── auth.test.js
│
├── .gitignore
└── .env.example
```

---

### 🔥 DESCRIPTION DES MODULES PRINCIPAUX
**server/core/**
Cœur du serveur :  
- server.js → lance le serveur  
- router.js → routes internes  
- middleware.js → sécurité, logs, parsing  

**server/modules/backup/**
Module de sauvegarde complet :  
- backup_engine.js → sauvegarde incrémentielle  
- compress.js → compression automatique  
- restore.js → restauration  

**server/api/**
Endpoints REST :  
- /upload  
- /download  
- /restore  
- /status  
- /auth  

**storage/**
Répertoires de stockage :  
- archives/ → sauvegardes complètes  
- incremental/ → sauvegardes incrémentielles  
- temp/ → fichiers temporaires  

**public/**
Interface web admin :  
- Dashboard  
- Logs  
- Sauvegardes  
- Monitoring  

---

### 🛡️ MODULES DE SÉCURITÉ
- Tokens rotatifs  
- Vérification des accès  
- Logs horodatés  
- Monitoring des connexions  
- Alertes automatiques (module monitor/)  

### ⚙️ SCRIPTS AUTOMATIQUES
- backup_now.sh → lance une sauvegarde immédiate  
- clean_temp.sh → nettoie les fichiers temporaires  
- rotate_tokens.sh → régénère les tokens de sécurité  

---

### 🚀 WORKFLOWS GITHUB ACTIONS
- deploy.yml → déploiement du serveur  
- backup.yml → sauvegarde automatique programmée  
- security_scan.yml → scan de sécurité 
