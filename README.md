# Combate GitHub Pages Site

A simple, static website showcasing projects and personal pages, designed to be hosted on GitHub Pages. The site features a homepage carousel, an About page, a Contact page, a custom 404 page, and two project sub-sites.

## Live Site

- If this repository is configured for GitHub Pages, the site will be available at either:
  - `https://<your-username>.github.io/` (for a user/organization site repository named `<your-username>.github.io`), or
  - `https://<your-username>.github.io/<repository-name>/` (for a project site).
- Update this section with the actual URL once deployed.

## Repository Structure

```text
index.html              # Homepage with carousel linking to projects
about.html              # About page
contact.html            # Contact page with form and social links
404.html                # Custom 404 page
cssfiles/
  ├─ style.css          # Global styles used by main pages
  └─ 404style.css       # Styles for the 404 page
jsfiles/
  └─ app.js             # Carousel and common interactions
images/                 # Static images and assets
Project1/
  ├─ index.html         # Kyoto, Japan showcase (project site)
  ├─ styles.css         # Project-specific styles
  └─ script.js          # Project-specific JavaScript
Project2/
  ├─ index.html         # Honkai Star Rail API character showcase
  └─ view.html          # Detail view for characters
```

## Key Pages and Features

- **Homepage (`index.html`)**: Interactive carousel highlighting:
  - **Project 1**: Kyoto, Japan showcase (`Project1/index.html`)
  - **Project 2**: Honkai Star Rail API character showcase (`Project2/index.html`)
  - Uses Bootstrap 4.5.2 for layout and components, plus custom CSS in `cssfiles/style.css`.
- **About (`about.html`)**: Intro and mission statement with a responsive image.
- **Contact (`contact.html`)**: Contact form and social links (Font Awesome icons for Facebook, Email, GitHub).
- **Custom 404 (`404.html`)**: Themed error page styled via `cssfiles/404style.css` (uses Bootstrap 5.3 bundle for JS).
- **Project 1 (`Project1/`)**: Kyoto-focused informational site with dedicated styles and scripts.
- **Project 2 (`Project2/`)**: Character showcase with listing and detail view pages.

## Tech Stack

- **HTML/CSS/JavaScript** (no build step required)
- **Bootstrap**: 4.5.2 on the homepage; 5.3 bundle referenced on the 404 page
- **Font Awesome**: Icons included on the Contact page

## Local Development

You can open `index.html` directly in a browser, or use a simple HTTP server for a more accurate environment:

- Python
  ```bash
  python3 -m http.server 8000
  # Visit http://localhost:8000
  ```
- Node.js
  ```bash
  npx serve .
  # or: npx http-server . -p 8000
  ```

## Deployment (GitHub Pages)

1. Push your changes to the default branch (usually `main`).
2. In GitHub, go to Settings → Pages.
3. Choose the source (e.g., `Deploy from a branch`, branch: `main`, folder: `/root`).
4. Save. After a few minutes, your site will be live at the provided URL.

Notes:
- For a user site, name the repository exactly `<your-username>.github.io` to host at the root domain.
- For a project site, use any repository name and the site will deploy under `/<repository-name>/`.

## Navigation Quick Links

- Homepage: `index.html`
- About: `about.html`
- Contact: `contact.html`
- Project 1: `Project1/index.html`
- Project 2: `Project2/index.html`

## License and Attribution

- External libraries are loaded from CDNs (Bootstrap and Font Awesome). Check their respective licenses.
- Images and media should be used in accordance with their original licenses/attributions.
