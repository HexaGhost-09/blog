<!--
  HexaGhost — personal website & blog
  Keep this README concise, useful, and easy to maintain.
-->

<div align="center">

# ◈ HexaGhost

### A personal corner of the internet.

**Code · Systems · Experiments · Open source**

A modern personal website for documenting things I build, tools I explore, and ideas I learn along the way.

<br />

[![Astro](https://img.shields.io/badge/Astro-Website-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Sanity](https://img.shields.io/badge/Sanity-Content%20Studio-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployment-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

**[Website](https://hexaghost-09.pntr.dev/)** · **[Portfolio](https://hexaghost-09.pntr.dev/portfolio/)** · **[GitHub](https://github.com/HexaGhost-09)**

</div>

---

## About

HexaGhost is my personal web space — part portfolio, part technical notebook, and part collection of experiments.

I use it to share projects, practical notes, development discoveries, and the occasional deep dive into the technologies I enjoy exploring.

### Areas of interest

| Area | What you'll find |
| --- | --- |
| 🌐 Web development | Websites, frontend experiments, and Astro |
| 🐧 Linux | Systems, self-hosting, and command-line tools |
| 📱 Android | Customisation, Android tools, and device experiments |
| ⚙️ Automation | Python utilities and workflow improvements |
| 🧩 Open source | Small tools, experiments, and project source code |

## Technology

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=flat-square&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)](https://pages.github.com/)

</div>

## Run locally

You'll need Node.js and npm installed.

```bash
git clone https://github.com/HexaGhost-09/blog.git
cd blog
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Content management

The project integrates Sanity as its content platform, with the Studio available at `/admin`.

To configure it:

1. Create a project at [Sanity](https://www.sanity.io/manage).
2. Create or select the `production` dataset.
3. Set the `SANITY_PROJECT_ID` and `SANITY_DATASET` environment variables in your deployment environment.
4. Configure the same variables in a local `.env` file when developing locally.
5. Start the site and open `/admin` to access Sanity Studio.

Sanity uses its own account authentication. Keep project credentials and private tokens out of source control.

## Deployment

This repository supports two deployment targets:

- **Vercel** — uses the Vercel adapter for the server deployment.
- **GitHub Pages** — uses the static Pages build configured in the GitHub Actions workflow.

The GitHub Pages workflow is in `.github/workflows/deploy.yml`. The Vercel project is configured separately.

## Project structure

```text
.
├── public/             # Static assets
├── src/
│   ├── content/        # Local content
│   ├── layouts/        # Shared page layouts
│   ├── lib/            # Integrations and utilities
│   ├── pages/          # Routes and pages
│   └── styles/         # Global styles
├── astro.config.mjs
└── package.json
```

## Connect

Have an idea, found something useful, or want to explore a project?

- GitHub: [@HexaGhost-09](https://github.com/HexaGhost-09)
- Website: [hexaghost-09.pntr.dev](https://hexaghost-09.pntr.dev/)

---

<div align="center">

**HEXAGHOST** · Built with curiosity.

<sub>Thanks for stopping by.</sub>

</div>
