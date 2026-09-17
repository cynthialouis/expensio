# Expensio

Mini back-office de gestion de dépenses : cartes, transactions, validation.

## Stack
React 19, TypeScript strict, Vite, React Query 5, Zustand 5, Zod 4, react-router 7, CSS Modules, Jest + Testing Library, Storybook.

## Commandes
`npm run dev` · `npm run mock` (API json-server :3001) · `npm test` · `npm run type-check` · `npm run lint` · `npm run storybook`

## Conventions
- Architecture par feature dans `src/features/*` ; design system dans `src/ui/*` ; couche API dans `src/api/*`.
- Aucun appel axios hors de `src/api`. Les composants passent par un hook `useXxx`.
- Types dérivés des schémas Zod (`z.infer`). Pas de `any`.
- Pas de `useEffect` pour dériver une valeur : utiliser une variable ou `useMemo`.
- Montants en centimes ; formatage uniquement via `formatMoney`.
- Chaque composant `ui/` a une story et un test. Tests Testing Library orientés comportement (`getByRole` en priorité).
- Commits conventionnels (`feat:`, `fix:`, `test:`, `refactor:`, `chore:`), petits et atomiques.

## Façon de travailler avec moi
- Toujours lire les fichiers concernés avant de proposer une modification.
- Proposer un plan avant toute modification qui touche plus de deux fichiers.
- Ne jamais modifier de fichier si je demande une analyse, une explication ou une review.
- Lancer `npm run type-check` et `npm test` après chaque modification.
