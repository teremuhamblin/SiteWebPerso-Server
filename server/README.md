# Dossier server/

Ce dossier contient le cœur du serveur SiteWebPerso-Server.  
Il regroupe l’architecture principale, les modules internes, la configuration et les API.

## Structure
- core/ : fichiers principaux du serveur (server.js, router.js, middleware)
- config/ : configuration serveur, sécurité et reverse proxy
- modules/ : moteurs internes (backup, auth, logs, monitoring)
- api/ : endpoints REST pour upload, download, restore, status et auth

## Fonction
Le dossier server/ assure :
- le lancement du serveur HTTP
- la gestion des routes API
- la sécurité (headers, tokens, logs)
- le système de sauvegarde et restauration
- le monitoring des accès

## Dépendances
- Node.js 18+
- Express.js

Serveur optimisé, modulaire et prêt pour la production.
