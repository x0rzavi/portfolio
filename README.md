# Portfolio

A minimalist, responsive personal portfolio built with plain HTML, CSS, and JavaScript. It features smooth section swipe transitions, a dark-mode invert, animated accents, and masked SVG icons.

## Structure

- `index.html` — markup for Landing, About, Projects, Contact
- `css/style.css` — base styles, colors, animations, dark-mode
- `css/style-responsive.css` — responsive rules and breakpoints
- `js/script.js` — smooth swipe-scroll, IntersectionObserver, dark-mode toggle, copy-email dynamic button revealer
- `assets/` — images and SVGs referenced by HTML/CSS
- `fonts/` — Nohemi *.woff2 referenced by CSS

## Features

- Swipe-style section transition overlay when navigating in-page links
- Smooth scrolling with temporarily disabled browser smooth behavior during transition
- Dark color invert toggle (asterisk button) that toggles body.inverted
- About image color-on-hover effect
- Skill list with masked icons tinted via background-color
- Projects section background inversion when visible (unless dark mode is active)
- Contact section with one-click copy email button and hover underlines
- Responsive layout with sensible spacing and typography

## Getting started (local preview)

Open in a local static server to ensure smooth behavior and correct asset paths.

- Python:
  - `cd portfolio`
  - `python -m http.server 8000`
  - Open `http://localhost:8000`

- Npx (optional):
  - `npx http-server -p 8000`

Then navigate to `index.html`.

## Development notes

- SVG icons are applied via `-webkit-mask-image/mask-image` so their color is controlled by `background-color`
- Animations:
  - `fadeInUp` for hero text
  - `swipe-up` for transition overlays
  - `status-pulse` for availability dot
- `IntersectionObserver` toggles a `.projects-visible` class based on viewport visibility

### Responsive breakpoints

- `<= 48em (768px)`: font-size scaled, tighter gaps, stacked layouts
- `769px–100em`: minor sizing tweaks
