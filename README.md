# Portfolio Cybersécurité

Portfolio professionnel présentant mes compétences et expériences en cybersécurité.

## Technologies Utilisées

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Fonctionnalités

- Design moderne et responsive
- Animations fluides
- Sections détaillées (Compétences, Expériences, Certifications)
- Intégration avec Root-Me et TryHackMe
- Formulaire de contact

## Installation

```bash
# Cloner le repository
git clone https://github.com/eyquemro/portfolio.git

# Accéder au répertoire
cd portfolio

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## Configuration

1. Créer un fichier `.env.local` à la racine du projet
2. Ajouter les variables d'environnement nécessaires :
   ```
   VITE_ROOTME_API_KEY=votre_clé_api
   ```

## Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production

## Déploiement

Le site est configuré pour être déployé sur Vercel. Voici les étapes post-déploiement :

1. **Configuration du Projet Vercel**
   - Importez le projet depuis GitHub
   - Configurez les variables d'environnement dans Settings > Environment Variables :
     ```
     VITE_ROOTME_API_KEY=votre_clé_api
     ```

2. **Configuration du Domaine**
   - Utilisez le domaine Vercel par défaut ou
   - Ajoutez votre domaine personnalisé dans Settings > Domains

3. **Déploiements Automatiques**
   - Les pushes sur la branche main déclenchent automatiquement un déploiement
   - Les Pull Requests créent des environnements de preview
   - Surveillez les déploiements dans le dashboard Vercel

4. **Monitoring**
   - Activez Production Monitoring dans les paramètres
   - Consultez les analytics de performance
   - Vérifiez les logs en cas d'erreur

## Contact

Romain Eyquem
- LinkedIn: [Romain Eyquem](https://www.linkedin.com/in/romain-eyquem)
- GitHub: [@eyquemro](https://github.com/eyquemro)
- Root-Me: [eyquemro](https://www.root-me.org/eyquemro)
