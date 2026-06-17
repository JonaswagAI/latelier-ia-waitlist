# L'Atelier IA — Waiting List Website

Site de liste d'attente pour la communauté L'Atelier IA.

---

## Structure du projet

```
l atelier IA/
├── index.html          ← Page principale (tout est dedans)
├── README.md           ← Ce fichier
├── apps-script.gs      ← Script Google Apps Script à copier
└── images/
    ├── logo.png        ← Ton logo (à ajouter manuellement)
    └── jonathan.jpg    ← Ta photo (à ajouter manuellement)
```

---

## Étape 1 — Ajouter tes images

Place ces fichiers dans le dossier `images/` :
- **`logo.png`** — Ton logo L'Atelier IA (fond transparent de préférence)
- **`jonathan.jpg`** — Ta photo (portrait, haute résolution)

---

## Étape 2 — Connecter Google Sheets

### 2a. Ouvrir le Google Sheet

Ouvre ton Google Sheet :
https://docs.google.com/spreadsheets/d/1LhHAQQNZ1-M0vsH-LkDa0Dnk9d6ZnSTJHVgowSSgquU

### 2b. Créer le script

1. Dans le Sheet : **Extensions → Apps Script**
2. Supprime tout le contenu par défaut
3. Copie-colle le contenu du fichier `apps-script.gs`
4. Clique sur **Enregistrer** (icône disquette)

### 2c. Déployer le script

1. Clique sur **Déployer → Nouveau déploiement**
2. Clique sur l'icône ⚙️ à côté de "Type" → sélectionne **Application Web**
3. Configure :
   - Description : `Waiting List L'Atelier IA`
   - Exécuter en tant que : **Moi**
   - Personnes autorisées : **Tout le monde**
4. Clique **Déployer**
5. Autorise les permissions demandées
6. **Copie l'URL** de déploiement (ressemble à : `https://script.google.com/macros/s/AKfyc.../exec`)

### 2d. Coller l'URL dans le site

Ouvre `index.html` et trouve cette ligne (vers le bas, dans `<script>`) :

```javascript
const APPS_SCRIPT_URL = "";
```

Remplace par :

```javascript
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/TON-URL-ICI/exec";
```

---

## Étape 3 — Déployer sur Vercel

### Option A — Via le dashboard Vercel (le plus simple)

1. Va sur [vercel.com](https://vercel.com) et connecte-toi
2. Clique **Add New → Project**
3. Glisse-dépose le dossier `l atelier IA` OU connecte un repo GitHub
4. Vercel détecte automatiquement le `index.html`
5. Clique **Deploy** → ton URL est prête !

### Option B — Via CLI

```bash
npm install -g vercel
cd "l atelier IA"
vercel
```

Suis les prompts. Ton URL sera générée automatiquement (ex: `atelier-ia.vercel.app`).

---

## Étape 4 — Ajouter l'URL dans ton Linktree

1. Copie ton URL Vercel
2. Va dans ton Linktree
3. Ajoute un nouveau lien : **"L'Atelier IA — Rejoins la liste"**
4. Colle l'URL

---

## Créer de nouvelles pages similaires

Pour créer une nouvelle landing page (ex: une page de vente, une page événement) :

1. **Duplique `index.html`** → renomme le fichier (ex: `vente.html`)
2. **Modifie le contenu** : change les textes, couleurs, sections
3. La structure de base réutilisable :
   - **Hero** : badge + titre Bebas Neue + sous-titre + CTA → photo droite avec fondu noir
   - **Section info** : fond navy `#050D1A`, grille de points clés
   - **Section action** : formulaire ou bouton sur fond noir
4. **Variables CSS à changer** au besoin (dans `:root`) :
   - `--cyan` : couleur accent
   - `--navy` : fond secondaire
5. Redéploie sur Vercel (si tu utilises la CLI : `vercel --prod`)

---

## Colonnes Google Sheets

Les inscriptions arrivent dans cet ordre :
| A | B | C | D | E |
|---|---|---|---|---|
| Prénom | Nom | Email | Téléphone | Date |
