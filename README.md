# Site vitrine Gnomespoitevins

Version simplifiee de l'architecture de reference: Next.js App Router, TypeScript, Tailwind CSS et composants Shadcn/UI.

Le perimetre de cette V1 est volontairement limite a une seule page d'accueil.

## Prerequis

- Node.js 20+
- npm

## Lancement local

1. Copier le fichier d'environnement:

```bash
cp .env.example .env.local
```

2. Installer les dependances:

```bash
npm install
```

3. Lancer le serveur:

```bash
npm run dev
```

## Variables d'environnement

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Deploiement Vercel + Supabase

1. Importer le repository sur Vercel.
2. Ajouter les variables de `.env.example` dans les environnements Vercel.
3. Connecter le projet Supabase cible et utiliser son URL + anon key.
4. Lancer le deploiement (build command: `npm run build`).

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`
