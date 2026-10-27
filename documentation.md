#  Documentation : Classes Tailwind CSS Apprises

Ce document sert d'aide-mémoire et de documentation technique. Il regroupe les différentes classes utilitaires **Tailwind CSS** apprises et appliquées lors de l'intégration de la maquette **YouCode Cantine**.

##  1. Mise en page (Layout & Flexbox/Grid)

La gestion de la structure de la page, l'alignement et le positionnement des éléments.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `fixed` | Sort l'élément du flux normal et le fixe par rapport à l'écran. | Sidebar | 
| `sticky top-0` | Colle l'élément en haut de la fenêtre lors du défilement. | Header | 
| `z-10` | Définit l'empilement (z-index). Place l'élément au-dessus des autres. | Header | 
| `ml-64` | Marge extérieure gauche (margin-left) de 16rem (256px). Permet de ne pas cacher le contenu sous la sidebar. | Header, Main | 
| `h-screen` | Hauteur égale à 100vh (100% de la hauteur de l'écran). | Sidebar | 
| `min-h-screen` | Hauteur minimale de 100vh. S'agrandit si le contenu déborde. | Main (Corps de page) | 
| `justify-between` | Flexbox : Pousse le premier enfant au début et le dernier à la fin. | Header, En-têtes de sections | 
| `items-center` | Flexbox : Centre les enfants sur l'axe transversal (verticalement). | Header, Cartes, Badges | 
| `flex-1` | Flexbox : Permet à l'élément de grandir pour occuper tout l'espace disponible. | Boutons d'action | 
| `ml-auto` | Pousse un élément vers la droite dans un conteneur flex. | Bouton thème (Header) | 
| `grid grid-cols-4` | Grid : Crée une grille avec 4 colonnes de largeur égale. | Statistiques | 

##  2. Espacement et Séparateurs (Spacing & Borders)

La gestion des marges, des espacements internes et des bordures de séparation.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `space-y-2` | Ajoute un espace vertical uniforme entre les enfants d'un conteneur. | Liste des liens (Sidebar) | 
| `divide-y divide-slate-100` | Ajoute une bordure horizontale entre chaque enfant. Idéal pour les listes. | Entrée / Plat / Dessert | 
| `gap-4` / `gap-6` | Définit l'espacement (gouttière) entre les éléments d'une grille ou d'un flex. | Grilles de cartes | 
| `shrink-0` | Flexbox : Empêche un élément de se faire écraser si l'espace manque. | Icônes des statistiques | 
| `min-w-0` | Prévient les débordements de texte dans les conteneurs flex/grid. | Listes déroulantes (Selects) | 
| `p-6` / `px-4 py-2` | Paddings (espacement interne). `p` = partout, `px` = horizontal, `py` = vertical. | Cartes, Boutons, Sections | 
| `mb-4` / `mt-6` | Marges (margin). `mb` = margin-bottom, `mt` = margin-top. | Titres, Conteneurs | 

##  3. Apparence et Effets (Styling & Transitions)

La personnalisation visuelle, les couleurs, les ombres et les transitions.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `overflow-hidden` | Cache tout ce qui dépasse de la boîte (utile pour garder des coins arrondis). | Cartes du menu | 
| `rounded-xl` / `rounded-full`| Applique des coins fortement arrondis / cercle parfait. | Cartes principales, Badges | 
| `shadow-sm` / `shadow-xl` | Applique une ombre légère (sm) ou très prononcée (xl). Donne du relief. | Cartes de recettes, Sections | 
| `object-cover` | L'image remplit son conteneur sans se déformer, en se recadrant si besoin. | Photos des recettes | 
| `hover:bg-slate-800` | Modifie la couleur de fond uniquement lors du survol avec la souris. | Liens de la sidebar | 
| `hover:-translate-y-1` | Effet de soulèvement (déplacement vers le haut de 0.25rem) au survol. | Cartes de la réserve | 
| `transition` | Active des animations fluides lors des changements d'état (comme le `hover`). | Boutons, Cartes | 
| `invert` | Filtre CSS : inverse les couleurs (transforme les icônes noires en blanches). | Icônes de la Sidebar | 

##  4. Typographie & Couleurs (Typography & Colors)

Gestion des textes et des couleurs de base de l'interface.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `text-sm` / `text-lg` | Modifie la taille du texte (petit pour les labels, grand pour les titres). | Textes, Titres, Boutons | 
| `font-bold` / `font-medium` | Gère l'épaisseur de la police (Gras, semi-gras). | Titres, Textes importants | 
| `text-slate-700` | Applique une couleur au texte (ici un gris-bleu foncé très lisible). | Textes généraux | 
| `bg-blue-500` / `text-white` | Applique une couleur de fond bleue avec un texte blanc par-dessus. | Boutons d'action principaux | 
| `capitalize` | Met la première lettre de chaque mot en majuscule automatiquement. | Titres des recettes | 

##  5. Responsive Design (Adaptabilité Mobile/Desktop)

Utilisation des préfixes (breakpoints) pour adapter le design à toutes les tailles d'écrans.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `sm:` / `md:` / `lg:` | Préfixes déclenchant une classe à partir d'une certaine taille d'écran (Tablette, PC). | Grilles, Layout | 
| `grid-cols-1` | Par défaut (sur mobile), les éléments prennent toute la largeur (1 colonne). | Réserve de recettes | 
| `md:grid-cols-3` | Affiche 3 colonnes uniquement sur les écrans moyens (tablettes) et plus. | Réserve de recettes | 
| `lg:grid-cols-4` | Affiche 4 colonnes sur les grands écrans (ordinateurs). | Réserve de recettes | 

##  6. Mode Sombre (Dark Mode)

Préparation de l'interface pour le thème sombre.

| Classe Tailwind | Rôle / Description | Élément(s) Cible(s) | 
| ----- | ----- | ----- | 
| `dark:` | Préfixe pour appliquer un style uniquement quand le mode sombre est activé. | Body, Conteneurs, Textes | 
| `dark:bg-gray-900` | Change le fond en gris très foncé en mode sombre. | Sidebar, Fond de page | 
| `dark:text-white` | Rend le texte blanc pour qu'il soit bien visible sur fond sombre. | Titres, Textes descriptifs | 
| `dark:border-slate-700` | Assombrit les bordures pour les adapter au thème de nuit. | Bordures des cartes | 