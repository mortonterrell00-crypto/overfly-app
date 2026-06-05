# 🚀 Clone and Run Overfly

## Step 1: Clone the Repository

Open your terminal and run:

```bash
cd ~/Desktop  # or wherever you want the project
git clone https://github.com/mortonterrell00-crypto/overfly-app.git
cd overfly-app
```

## Step 2: Install Dependencies

Make sure you have **pnpm** installed. If not:

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

## Step 3: Run the App

```bash
pnpm dev
```

The app will start and you should see output like:
```
  VITE v6.3.5  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser to `http://localhost:5173/`

## What You'll See

- **Mobile frame** (393x852px) centered on screen
- **Interactive map** of New York area with flight markers
- **12 live flights** that you can click to view details
- **Bottom sheets** for flight info, search, and logbook

## Troubleshooting

### Port already in use
If port 5173 is taken, Vite will automatically use another port.

### Missing dependencies
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Leaflet CSS not loading
The styles are imported in `src/styles/index.css` - make sure this file exists.

## Project Status

✅ Repository created  
✅ Core files pushed  
✅ Configuration complete  
⚠️ **Note**: The main component files (OverflyApp.tsx, FlightMap.tsx) and Figma imports are in your local development environment. When you clone, you'll need to add these files or they'll be recreated from the local commit.

## Next Steps

1. Clone the repo ✨
2. Install dependencies
3. Run `pnpm dev`
4. Start building! 🛫

---

Need help? Check the main [README.md](./README.md) or [SETUP.md](./SETUP.md)
