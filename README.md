# youcode-gestion-cantine
**YouCode Cantine** est une interface web qui permet de composer le menu de la semaine (du lundi au vendredi), de consulter la réserve de recettes et de suivre le coût et l'équilibre alimentaire.

Le projet a été réalisé pour apprendre **HTML** et **Tailwind CSS** en reproduisant une maquette complète : barre latérale, en-tête, cartes de statistiques et grille du menu.



##  Fonctionnalités
**Sidebar fixe** avec logo, liens de navigation et icônes
-  **Header collant** avec titre et bouton mode clair / sombre
-  **4 cartes de statistiques** : recettes en réserve, jours prêts, coût de la semaine, équilibre alimentaire
-  **Menu de la semaine** : 5 cartes (lundi à vendredi) avec choix de l'entrée, du plat principal et du dessert
-  **Réserve de recettes** *(en cours)*

##  Structure du projet

```
projet/
├── index.html         # Page principale
├── style.css          # Styles personnalisés
├── icons/             # Icônes SVG (sidebar, cartes, header)
├── screenshots/       # Captures d'écran
├── README.md          # Documentation
└── TAILWIND.md        # Notes détaillées sur Tailwind
```

##  Classes Tailwind apprises

### Mise en page

| Classe | Rôle | Utilisée dans |
|---|---|---|
| `fixed` | Sort l'élément du flux et le fixe à l'écran | Sidebar |
| `sticky top-0` | Colle l'élément en haut pendant le défilement | Header |
| `z-10` | Place l'élément au-dessus des autres (`z-index`) | Header |
| `ml-64` | Marge gauche de 256 px, égale à la largeur de la sidebar | Header, main |
| `h-screen` / `min-h-screen` | Hauteur = 100 % de l'écran / au moins 100 % | Sidebar, main |
| `justify-between` | Écarte les enfants aux deux extrémités | Header |
| `items-center` | Centre les enfants sur l'axe croisé | Header, cartes |
| `flex-1` | L'élément prend tout l'espace restant | Barre de recherche |
| `ml-auto` | Pousse l'élément vers la droite | Header |
| `grid grid-cols-4` / `grid-cols-5` | Grille à 4 ou 5 colonnes égales | Statistiques, menu |

### Espacement et séparateurs

| Classe | Rôle | Utilisée dans |
|---|---|---|
| `space-y-2` | Espace vertical **entre** les enfants (pas avant le premier) | Liste de la sidebar |
| `divide-y divide-slate-100` | Ligne de séparation **entre** les enfants | Entrée / plat / dessert |
| `gap-4` | Espace entre les éléments d'un flex ou d'une grid | Grilles |
| `shrink-0` | Empêche l'élément de rétrécir | Icônes des cartes |
| `min-w-0` | Permet à un élément flex/grid de rétrécir sous son contenu | Listes déroulantes |

### Apparence

| Classe | Rôle | Utilisée dans |
|---|---|---|
| `overflow-hidden` | Coupe ce qui dépasse (garde les coins arrondis propres) | Cartes du menu |
| `rounded-xl` / `rounded-full` | Coins très arrondis / cercle | Cartes, badges |
| `shadow-sm` / `shadow-xl` | Ombre légère / marquée | Cartes, sections |
| `object-cover` | Recadre l'image sans la déformer | Photos des recettes |
| `hover:bg-slate-800` | Change le fond au survol | Liens de la sidebar |
| `invert` | Inverse les couleurs d'une image (noir → blanc) | Icônes de la sidebar |

### Responsive et mode sombre
