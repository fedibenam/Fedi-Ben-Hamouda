# Fedi Ben Hamouda - Portfolio Website

This repository contains my personal portfolio website built with React and customized from the DeveloperFolio base.
It is designed for recruiters and engineering teams to quickly review my profile, experience, projects, certifications, and contact details.

## About Me

I am a Full-Stack Software Engineer focused on:
- Web application development
- Cloud and DevOps engineering
- AI-powered product features

I build production-ready systems using React, Node.js, Python, Docker, Kubernetes, and AWS-oriented workflows.

## What This Portfolio Shows

The website currently includes:
- Hero introduction and recruiter-focused summary
- Skills and technology stack
- Education
- Professional experience (Sofrecom)
- Featured projects
- Licenses and certifications (DataCamp)
- Contact section and resume download

## Tech Stack

- React 16
- SCSS
- React Reveal animations
- Lottie animations
- GitHub/Medium optional data fetch scripts

## How The Site Works

This project is configuration-driven.
Most visible content is controlled from a single file:

- `src/portfolio.js`

From this file, sections are enabled/disabled and all texts/links/images are configured.

### Main Flow

- `src/App.js` renders `src/containers/Main.js`
- `Main.js` composes all sections in order
- Section components read data from `src/portfolio.js`
- Global color/style values come from `src/_globalColor.scss`

### Image and Asset Locations

- Main images: `src/assets/images/`
- Resume file: `src/containers/greeting/resume.pdf`
- Lottie files: `src/assets/lottie/`

## Environment Variables

This project supports optional API-based content generation through `fetch.js`.

Use `.env` (based on `env.example`) with:

- `REACT_APP_GITHUB_TOKEN`
- `GITHUB_USERNAME`
- `USE_GITHUB_DATA`
- `MEDIUM_USERNAME`

If GitHub/Medium data is disabled, the portfolio uses manual content from `src/portfolio.js`.

## Local Development

```bash
# install dependencies
npm install

# start local dev server
npm start
```

Build for production:

```bash
npm run build
```

## Deployment (Netlify)

1. Push repository to GitHub
2. In Netlify: Add new site -> Import from Git
3. Select this repository
4. Use:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Add required environment variables in Netlify (if needed)
6. Deploy

## Customization Guide

For future updates, edit:

- `src/portfolio.js` for content and sections
- `src/_globalColor.scss` for theme/colors
- `public/index.html` for SEO metadata

## Contact

- LinkedIn: https://www.linkedin.com/in/fedi-ben-hamouda/
- GitHub: https://github.com/fedibenam
- Email: fedibenhamchesd@gmail.com
