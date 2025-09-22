# Minimal Single-Page Website

A tiny, framework-free single-page site ready for GitHub Pages.

## Local preview

Just open `index.html` in your browser. No build step required.

## Deploy to GitHub Pages

You have two easy options:

### Option A: User/Organization site (`<username>.github.io`)
1. Create a new public repo named exactly `<username>.github.io`.
2. Add these files to the repo root: `index.html`, `styles.css`, `script.js`.
3. Commit and push to the `main` branch.
4. Wait ~1–2 minutes, then visit `https://<username>.github.io`.

### Option B: Project site (`https://<username>.github.io/<repo>`)
1. Create a (public or private) repo, any name (e.g., `my-site`).
2. Put the site files in the repo root and push to `main`.
3. In GitHub: Settings → Pages → Build and deployment
   - Source: "Deploy from a branch"
   - Branch: `main` (folder `/root`)
4. Save. Wait ~1–2 minutes. Your site will be at `https://<username>.github.io/<repo>`.

## Customizing
- Change the title and content in `index.html`.
- Adjust colors/spacing in `styles.css`.
- Edit interactivity in `script.js`.

## Notes
- This is a hash-based single page (uses `#home`, `#about`, `#contact`).
- Works without JavaScript for basic content (you can keep one section visible by default if desired).

## HCI Diary: how to add an entry
Entries live inline in `index.html` under the `#diary` section.

Steps:
1. Find the `<ol class="diary-list">` in `index.html`.
2. Add a new `<li>` at the top with structure:

```html
<li>
  <div class="entry">
    <div class="entry-header">
      <time datetime="YYYY-MM-DD">Week N • YYYY-MM-DD</time>
      <span class="tag">Topic</span>
    </div>
    <p>1–3 sentences summary. Add links below if needed.</p>
    <ul class="entry-links">
      <li><a href="#">Artifact link</a></li>
    </ul>
  </div>
  </li>
```

3. Commit and push to update your GitHub Page.

## Project 1 section
The Project 1 area lives under the `#p1` section in `index.html`. Edit the cards under the `.p1-grid`:

- Replace placeholders (team, dates, contributions)
- Link your artifacts (interview notes, photos, mind map, slides, AI usage log)
- Keep your ongoing weekly notes in the `Diary` section

Navigation includes a `Project 1` link (`#p1`).

