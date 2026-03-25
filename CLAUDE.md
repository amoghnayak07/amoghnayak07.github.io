# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (localhost:3000)
npm run build      # Production build
npm test           # Run tests (interactive watch mode)
npm test -- --watchAll=false  # Run tests once
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d build)
```

## Architecture

This is a single-page React portfolio site (TypeScript, Create React App). There is one route (`/`) that renders the `Home` component from `src/modules/main/Main.tsx`.

### Page structure

`Main.tsx` is the root page component. It uses an `IntersectionObserver` to track which of the four `<section>` elements is currently in view (`activeSection` state), and passes that down to `Nav` and `Work`. Sections in order: `intro`, `work`, `about`, `contact`.

Navigation (`src/modules/nav/Nav.tsx`) uses `react-scroll` `<Link>` for smooth in-page scrolling. The active section highlight is driven by `activeSection` from the parent.

### Work section

`Work.tsx` renders an MUI `Accordion` list from `WorkItems` in `src/constants/PortfolioConstants.ts`. Each accordion item maps to a dedicated component in `src/modules/work/` (BuRP, QollaR, LV, PeR, ResoluteAI). When expanded, it scrolls the item into view using a `scrollToRef` array. When the user navigates away from the work section, the accordion resets.

To add a new work item: add its name to `WorkItems` in `PortfolioConstants.ts`, create a component in `src/modules/work/`, add image arrays and skill/highlight constants to `PortfolioConstants.ts`, and add a case in `getWorkComponent` in `Work.tsx`.

### Styling

- MUI v6 with a custom theme defined in `src/muiTheme/CreateTheme.ts` and provided via `AGNThemeProvider` in `src/muiTheme/Theme.tsx`.
- Per-component styles use MUI's `makeStyles` (from `@mui/styles`) in co-located `styles.ts` files.
- Global styles in `src/assets/scss/global.scss`.
- Color primitives live in `src/globalColors/Colors.tsx`; use `getColor(type, code)` to reference them (e.g., `getColor("primary", 200)`).
- Typography variants are all custom (e.g., `heading_01_medium`, `paragraph_02_bold`) — defined in `CreateTheme.ts` and declared in `Theme.tsx`. Use these variants rather than MUI defaults.
- MUI theme `spacing` base unit is `10` (i.e., `theme.spacing(1) === 10px`).

### Responsive layout

Breakpoint props (`isMob`, `isTab`, `isMd`) are derived in `Main.tsx` via `useMediaQuery` and passed down as props. Components branch on these for layout and typography variant choices.

### Static assets

Images and GIFs are served from `public/assets/` and referenced as absolute paths (e.g., `/assets/images/BuRP/BuRP-landing.png`). Image arrays per project are defined in `PortfolioConstants.ts` and consumed by `Carousel.tsx`.
