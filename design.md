# FITBY — Design System

Landing page one-page pour **FITBY**, coaching fitness & bien-être (FR).
Reproduction haute fidélité d'une maquette de référence 1024×1536 (viewport desktop étroit).
Toutes les valeurs de la maquette sont mises à l'échelle ×1.40625 pour un viewport de 1440px.

## Direction

Éditorial, minéral, « wellness premium ». Contraste très appuyé : alternance de bandes
beige-blanc cassé et de bandes quasi-noires, traversées par une seule couleur d'action,
le vert olive. Aucun aplat vif, aucune couleur décorative. Photos sombres et chaudes.

## Couleurs

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#F5F4F0` | fond des sections claires |
| `surface` | `#FFFFFF` | cartes, champs de saisie |
| `surface-soft` | `#F7F6F2` | carte du formulaire hero |
| `ink` | `#171A12` | titres sur fond clair |
| `body` | `#4F5348` | texte courant sur fond clair |
| `muted` | `#6C6F63` | texte tertiaire, métadonnées |
| `olive` | `#2F441C` | boutons pleins sur fond clair (CTA principal) |
| `olive-icon` | `#4C5F3A` | icônes et libellés d'accent sur fond clair |
| `sage` | `#8FB86C` | mot accentué des titres sur fond sombre, étoiles |
| `sage-soft` | `#789266` | boutons pleins sur fond sombre |
| `sage-bright` | `#78A95A` | bouton du CTA final |
| `night` | `#060B0C` | fond des sections sombres, footer |
| `night-soft` | `#0B1010` | dégradés, fond de section 3 |
| `night-card` | `#0E1414` | cartes sur fond sombre |
| `night-border` | `rgba(255,255,255,0.09)` | filets et bordures sur fond sombre |
| `hairline` | `rgba(23,26,18,0.10)` | filets sur fond clair |

Vert sauge pâle `#C2C4A7` : micro-détails uniquement.

## Typographie

**Hanken Grotesk** (variable, self-hostée dans `public/fonts/`) — sans-serif géométrique,
grande hauteur d'x, approche serrée. Correspondance la plus proche de la maquette.

| Rôle | Taille @1440 | Graisse | Interlettrage | Interligne |
|---|---|---|---|---|
| H1 hero | 46px | 700 | -0.015em | 1.06 |
| H2 section | 36px | 700 | -0.015em | 1.08 |
| H2 hero carte | 21px | 700 | -0.01em | 1.15 |
| H3 carte | 17px | 600 | 0 | 1.25 |
| Corps | 16px | 400 | 0 | 1.6 |
| Petit corps | 14px | 400 | 0 | 1.55 |
| Libellé d'accent (eyebrow) | 11px | 600 | 0.16em | 1 |
| Navigation | 15px | 500 | 0 | 1 |
| Bouton | 14px | 600 | 0.01em | 1 |

Règle : capitales + interlettrage large réservés aux eyebrows et à la baseline du logo.

## Grille & espacement

- Conteneur : `max-width: 1440px`, `padding-inline: clamp(24px, 5.37vw, 77px)` → contenu de 1286px à 1440px.
- Échelle d'espacement : 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 88 / 112.
- Rythme vertical des sections : 88–112px de padding haut et bas.
- Rayons : `8px` (champs), `12px` (cartes, formulaire), `999px` (boutons, pastilles).

## Composants

- **Bouton primaire (fond clair)** — pastille olive `#2F441C`, texte crème, hauteur 48px, padding 28px.
- **Bouton primaire (fond sombre)** — pastille sauge `#789266`, texte `#0B1010`.
- **Bouton accent final** — pastille `#78A95A`, texte `#0B1010`.
- **Eyebrow** — filet horizontal de 22px puis libellé capitales espacé, couleur `olive-icon` ou `sage`.
- **Carte claire** — fond blanc, bord `hairline`, ombre très douce, rayon 12px, padding 28px.
- **Carte sombre** — fond `night-card`, bord `night-border`, rayon 12px, padding 28px.
- **Champ de saisie** — fond `#FAFAF7`, bord `rgba(23,26,18,0.08)`, rayon 8px, hauteur 44px, icône à gauche.
- **Témoignage** — avatar rond 44px, citation, nom, résultat, 5 étoiles sauge.
- **Stat du CTA final** — icône sauge, libellé 2 lignes, séparateur vertical `rgba(255,255,255,0.14)`.

## Mise en page des sections

1. **Header** — transparent sur le hero, logo FITBY crème + baseline, nav centrée, bouton olive à droite.
2. **Hero** — photo plein cadre, dégradé sombre de gauche à droite, texte à gauche, carte formulaire flottante à droite, 4 bénéfices en bas à gauche.
3. **Pourquoi me choisir** — fond crème, 2 colonnes : intro à gauche (40 %), 4 piliers à droite (60 %).
4. **Mon accompagnement** — fond quasi-noir, intro à gauche, 3 cartes, photo produit en fondu sur la droite.
5. **Ils l'ont fait** — fond crème, titre à gauche, lien « Voir plus d'avis » à droite, 3 témoignages.
6. **CTA final** — photo plein cadre assombrie, texte et bouton à gauche, 4 bénéfices à droite.
7. **Footer** — fond noir, logo + baseline à gauche, liens légaux et réseaux à droite.

## Mouvement

Un seul chargement orchestré : révélation en cascade (opacité + translation Y de 16px) des
blocs au scroll via `IntersectionObserver`, une seule fois par élément, 600ms `cubic-bezier(0.16,1,0.3,1)`,
décalage de 70ms entre éléments frères. Aucune micro-interaction dispersée ; seuls les boutons
et les liens ont une transition de 200ms.

## Contraintes

- Le logo fourni (`logo-fitby-cream.png`, wordmark FITBY) est utilisé tel quel, recolorié en crème `#F5F4F0`.
  Une variante olive `logo-fitby-olive.png` existe pour les fonds clairs.
- Formulaire : validation côté client uniquement, aucun appel réseau.
- Responsive : les colonnes se replient sous 1024px, le hero passe en une colonne sous 900px.
