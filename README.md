# Unicorn Overlord Class Guide

A lightweight static site to explore Unicorn Overlord classes, strengths/weaknesses, and counter relationships.

## Live Preview
- Chinese: https://paxaq.github.io/UOgameinfos/
- English: https://paxaq.github.io/UOgameinfos/index-en.html
- Deployed via GitHub Pages (Actions). First publish may take 1–2 minutes.

## Local Development
- Serve with any static server:
  - `python3 -m http.server 8000` → open `http://localhost:8000`

## Project Structure
- `index.html` — Chinese UI; includes a link to English.
- `index-en.html` — English UI.
- `styles.css` — Global styles, responsive rules, animations.
- `data.js` — Shared data source (`DATA.zh`, `DATA.en`).
- `script.js` — CN interactions (selectors, rendering, animations).
- `script.en.js` — EN interactions reusing shared data.

## Contributing
- Read `AGENTS.md` (Repository Guidelines) for style, naming, testing, and the PR template.
- If changing anchors/IDs/classes, update both scripts and verify navigation/scroll and card interactions.

## Deployment
- GitHub Actions workflow (`.github/workflows/pages.yml`) deploys the site on every push to `main`.

## License
- No license selected yet. Open an issue if you prefer MIT/Apache-2.0.
