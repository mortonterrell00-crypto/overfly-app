# Overfly Setup Instructions

## Quick Start

1. **Clone the repository:**
```bash
cd ~/Desktop  # or wherever you want the project
git clone https://github.com/mortonterrell00-crypto/overfly-app.git
cd overfly-app
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Run the development server:**
```bash
pnpm dev
```

## Project Structure

```
overfly-app/
├── src/
│   ├── app/
│   │   ├── App.tsx           # Main entry point
│   │   └── components/
│   │       ├── OverflyApp.tsx    # Main app component (12 flights, bottom sheets)
│   │       └── FlightMap.tsx     # Leaflet map with CartoDB tiles
│   ├── imports/              # Figma design system imports
│   └── styles/               # CSS files (fonts, theme, tailwind)
├── package.json
├── vite.config.ts
└── README.md
```

## Key Features

- **Interactive Map**: Leaflet with CartoDB light tiles
- **Flight Tracking**: 12 real flights with live data around New York
- **Bottom Sheets**: 
  - Flight details (expandable/collapsible with drag)
  - Search flights
  - Logbook
- **Animations**: Smooth slide-in transitions
- **Mobile-first**: Optimized for iPhone (393x852)

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS v4
- Leaflet for maps
- Vite for build
- pnpm for package management

## Development

The app runs in a mobile frame (393x852px) centered on the screen. All interactions are touch-optimized.

### Component Notes

**OverflyApp.tsx** (948 lines)
- Main application logic
- 12 flight database entries
- Bottom sheet state management
- Drag interactions

**FlightMap.tsx** (204 lines)
- Leaflet map integration
- Dynamic plane markers with rotation
- Zoom-based visibility (4-12 flights)
- Click event handling

## Deployment

Build for production:
```bash
pnpm build
```

The build output will be in the `/dist` directory.

---

Built with Figma Make and Claude Code
