// Import

import * as dotenv from 'dotenv';
import http from 'http';
import { prepareResponse } from './app/resp-serv.js';


// Je viens recuperer TOUTES les variables d'environnements presentes dans mon fichier .env (attention il faut bien que le fichier s'appelle `.env`)
dotenv.config();


// Configuration serveur
// Constante pour créer le serveur avec le CB
const server = http.createServer(prepareResponse);
// Constante pour définir le port par rapport a l'environnement ou par défaut 3000
const port = process.env.PORT || 3000;

// serveur mis en mode écoute
server.listen(port, () => {
console.log(`Serveur démarré sur http://localhost:${port}/`);
});