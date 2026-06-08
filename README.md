# Post-it
Un site web innovant qui utilise une API pour permettre aux utilisateurs d'envoyer des messages anonymement, favorisant ainsi l'expression libre et créative.

# 📌 Post-it App

Une application web moderne et interactive de gestion de Post-it virtuels, développée avec l'écosystème **Vue 3** et stylisée avec **Bootstrap**.

## 🚀 Fonctionnalités

*   **Création de Post-it** : Ajoutez rapidement de nouvelles notes textuelles.
*   **Gestion des états** : Organisation fluide des données grâce à un magasin global.
*   **Navigation intuitive** : Système de routes pour basculer entre les différentes vues.
*   **Design Responsive** : Interface soignée et adaptable sur mobile, tablette et PC.

## 🛠️ Technologies utilisées

*   **Framework** : [Vue 3](https://vuejs.org) (Composition API)
*   **Outil de build** : [Vite](https://vite.dev) (Ultra rapide)
*   **Gestion d'état** : [Pinia](https://vuejs.org)
*   **Routage** : [Vue Router](https://vuejs.org)
*   **Design & Layout** : [Bootstrap 5](https://getbootstrap.com)
*   **Langage** : TypeScript / JavaScript

## 📦 Installation et Lancement

Suivez ces étapes pour installer et lancer le projet en local sur votre machine.

### Prerequisites

Assurez-vous d'avoir installé [Node.js](https://nodejs.org) (version 18 ou supérieure recommandée).

### 1. Cloner le projet

```bash
git clone https://github.com:Mohamed00077/Post-it.git
cd Post-it/post-it
```

### 2. Installer les dépendances

Installez tous les paquets requis (y compris Vue, Pinia, Vue Router et Bootstrap) :

```bash
npm install
```

### 3. Lancer le serveur de développement

Démarrez l'application localement :

```bash
npm run dev
```

Ouvrez ensuite votre navigateur à l'adresse locale indiquée dans votre terminal (généralement `http://localhost:5173/`).

### 4. Compiler pour la production

Pour générer les fichiers optimisés prêts à être déployés en production :

```bash
npm run build
```

## 📂 Structure du Projet

```text
├── src/
│   ├── assets/          # Fichiers statiques (images, styles globaux)
│   ├── components/      # Composants Vue réutilisables
│   ├── router/          # Configuration de Vue Router
│   ├── stores/          # Gestion d'état global avec Pinia
│   ├── views/           # Pages principales de l'application
│   ├── App.vue          # Composant racine
│   └── main.ts          # Point d'entrée de l'application (imports Bootstrap)
├── package.json         # Dépendances et scripts du projet
└── vite.config.ts       # Configuration de Vite
```

<img width="960" height="510" alt="image" src="https://github.com/user-attachments/assets/6b480bc5-d479-4d5d-b910-2498690dec6f" />



