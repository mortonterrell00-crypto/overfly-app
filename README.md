# Overfly ✈️

A modern mobile flight tracking application built with React, TypeScript, and Leaflet.

## Features

- 📍 **Interactive Map** - Real-time flight tracking on an interactive map centered on New York
- ✈️ **Flight Details** - View comprehensive flight information including altitude, speed, heading, and aircraft details
- 🔍 **Search Flights** - Search for flights by airline, airport, or flight number
- 📖 **Logbook** - Track your flight history and statistics
- 📱 **Mobile Optimized** - Designed for iPhone (393x852) with smooth animations
- 🎨 **Modern UI** - Clean, minimalist design with glassmorphism effects

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Leaflet** - Interactive maps
- **Vite** - Build tool
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Root component
│   └── components/
│       ├── OverflyApp.tsx      # Main app component
│       ├── FlightMap.tsx       # Leaflet map integration
│       └── ui/                 # Reusable UI components
├── imports/                     # Figma design imports
└── styles/                      # Global styles and themes
```

## Features in Detail

### Flight Tracking
- Dynamic plane markers with real-time rotation
- Zoom-based visibility (4-12 flights depending on zoom level)
- Click on any flight marker to view details

### Bottom Sheets
- **Flight Details**: Expandable sheet with aircraft info and live orientation
- **Search**: Find flights by various criteria
- **Logbook**: View flight history and statistics

### Interactions
- Drag flight details sheet to expand/collapse
- Smooth slide-in animations
- Click outside or drag down to close sheets

## Built With

This app was built using Figma Make and Claude Code.

## License

MIT

---

Made with ❤️ by mortonterrell00-crypto
