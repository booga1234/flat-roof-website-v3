# Flat Roof Website

Built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📦 Deploy

This project is configured to deploy to Vercel. Simply push to your connected GitHub repository and Vercel will automatically deploy your changes.

### First-time Git Setup

Before pushing to GitHub, configure your Git identity:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

Or set it globally:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Then commit and push:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

