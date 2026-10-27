#  YouCode Cantine - Tableau de Bord & Gestion de Menu

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **Une application web moderne et intuitive pour gérer les repas, planifier les menus de la semaine et suivre les statistiques de la cantine YouCode.**

---

##  Fonctionnalités Principales

- ** Tableau de Bord Dynamique** : Visualisation en temps réel des statistiques clés (recettes en réserve, jours planifiés, coût par apprenant, équilibre alimentaire).
- ** Planificateur de Menu Hebdomadaire** : Interface fluide pour assigner des entrées, plats principaux et desserts du Lundi au Vendredi.
- ** Gestion de la Réserve de Recettes** : 
  - Ajout de nouvelles recettes avec image, prix, catégorie et tags.
  - Sauvegarde locale automatique (via `localStorage`) pour ne perdre aucune donnée.
  - Suppression interactive des plats.
- ** Design Moderne & Réactif** : Interface construite avec Tailwind CSS, incluant une barre latérale fixe, un en-tête "sticky" et des cartes survolables.

---

##  Technologies Utilisées

Ce projet a été conçu sans framework lourd, en s'appuyant sur les standards du web et des outils modernes d'intégration :

- **Structure** : HTML5 sémantique.
- **Style** : [Tailwind CSS](https://tailwindcss.com/) (CDN) pour une intégration ultra-rapide et un design sur-mesure.
- **Interactivité** : Vanilla JavaScript (Manipulation du DOM, événements, Local Storage).
- **Icônes** : Fichiers SVG personnalisés.

---

##  Démarrage Rapide

Pour tester le projet localement sur votre machine, suivez ces étapes simples :

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-nom-utilisateur/youcode-gestion-cantine.git
```

### 2. Accéder au dossier
```bash
cd youcode-gestion-cantine
```

### 3. Lancer l'application
Aucun serveur ni installation Node.js n'est requis. Il vous suffit d'ouvrir le fichier `index.html` directement dans votre navigateur web préféré :
- Double-cliquez sur `index.html` 
- **Ou** utilisez une extension comme *Live Server* sur VS Code pour une meilleure expérience.

---

##  Structure du Code

```text
youcode-gestion-cantine/
├── index.html           # Structure principale de l'application
├── style.css            # Animations et styles personnalisés hors Tailwind
├── js/
│   └── script.js        # Logique métier, calculs et gestion du LocalStorage
├── icons/               # Ressources graphiques (SVG)
├── screenshots/         # Captures d'écran pour la présentation
├── TAILWIND.md          # Documentation des classes Tailwind utilisées
└── README.md            # Ce fichier
```

---

##  Guide d'Utilisation

1. **Ajouter une recette** : Cliquez sur le bouton bleu `+ Ajouter une recette` dans la section Réserve. Remplissez le formulaire (Nom, Catégorie, Tags, Image, Prix) et validez.
2. **Planifier la semaine** : Remontez vers le menu de la semaine. Vos nouvelles recettes apparaîtront automatiquement dans les listes déroulantes correspondantes.
3. **Suivre le coût** : Dès que vous sélectionnez un plat dans le menu, le prix total journalier se met à jour automatiquement en bas de la carte du jour.

---

