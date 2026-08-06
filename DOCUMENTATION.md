# Control Hub — Documentation

## Project Overview
a dashboard to monitor your Netlify-hosted sites

## Features Completed

### Phase 0 — Setup
### Phase 1 — Static UI Shell
Home dashboard with responsive site-card grid, dark mode design tokens, clickable cards linking to site detail page (not yet built)

## Architecture Decisions
Why CSS Grid with auto-fill/minmax instead of manual breakpoints:
The traditional approach — writing separate @media rules for phone/tablet/desktop widths — requires guessing every screen size in advance and hardcoding column counts for each. That's brittle: a new device width you didn't anticipate falls through the cracks. auto-fill + minmax(280px, 1fr) instead describes a rule ("each card needs at least 280px, fit as many as will physically fit") rather than a fixed set of cases. The browser recalculates the layout continuously as the viewport changes, so it adapts to widths you never explicitly coded for. Less code, fewer edge cases, and it's the same technique used in most modern component libraries.

Why BEM naming (site-card__thumbnail) instead of plain class names:
Plain names like .thumbnail or .title are almost guaranteed to collide once the project grows — you'll eventually have a thumbnail inside a site card and a thumbnail somewhere else in the app, and CSS has no built-in scoping, so the second definition silently overrides the first. BEM's naming (block__element--modifier) encodes the relationship into the name itself: site-card__thumbnail can only mean one thing, no matter how many other components exist. It's not enforced by the browser — it's a discipline you and future collaborators follow — which is exactly why the convention needs to be consistent from the start rather than retrofitted later.

Why CSS variables instead of hardcoded hex/pixel values:
Hardcoding 
#1c1c1f in fifteen different rules means a design change (or a future light-mode toggle) requires hunting down every occurrence, and it's easy to miss one, leaving an inconsistent UI. Defining it once as --color-bg-card and referencing that variable everywhere means the value lives in exactly one place. Change it there, and every card, border, or button using it updates automatically. This is also literally what makes a theme switch (dark → light) feasible later — the components don't change at all, only the variable definitions do.

## Folder Structure
control-hub/
├── public/
|   |--css/base.css 
|   |--index.html
├── .gitignore
├── README.md
└── DOCUMENTATION.md   

## Technologies Introduced
CSS Grid, CSS Custom Properties, BEM naming convention, aspect-ratio/object-fit.

## APIs Integrated
(none yet — Phase 3+)

## Challenges Encountered
linking the css page to the html forgot include the base file it was located 

## Solutions Implemented
just knew the was the cause and added the name of the file in 

## Lessons Learned
ive learn about the autofill and BEM naming convention 
## Best Practices Applied

## Future Improvements
thumbnails are placeholder images, real screenshots  later.

## Next Development Phase
Phase 2: first backend function (get-sites), connecting to Supabase.
