# Backend (Node.js API)

Express API for the Smart Waste Management dashboard. It simulates live bin waste levels and exposes JSON endpoints consumed by the static frontend.

## Stack

- **Node.js** with **Express 5**
- **cors** enabled for browser requests from the frontend origin

## Files

- `server.js` — API routes, in-memory bin model, `updateBins()` demo refresh
- `package.json` — scripts (`npm start` / `npm run dev` → `node server.js`)

## Data model

There are **50 bins**: 5 zones × 10 bins per zone. Bin IDs look like `Z3B7` (zone 3, bin 7).

Each bin document includes:

- `id`, `zone`, `binNum`
- `waste`:
  - `paper`, `plastic`, `metal`, `organic`, `liquid` (0–100 style demo values)
  - `total_average` — mean of paper, plastic, metal, organic (used as the main “fill” signal)

On every relevant request, `updateBins()` recomputes pseudo-random (deterministic-by-seed) waste numbers so the UI appears to update over time.

## Endpoints

| Method | Path | Description |
|--------|------|----------------|
| `GET` | `/bins` | Full list of bins with current `waste` objects. |
| `GET` | `/dispatch` | Bins that need attention: `total_average` **> 75** → `MEDIUM`, **> 90** → `HIGH`. Sorted with `HIGH` first, then by higher fill. |
| `GET` | `/stats` | `{ total_waste, daily_generated }` — both are the same total: sum of all `waste` numeric fields **except** `total_average` across every bin. |

## Run

From the **backend** directory (not the repo root, unless your shell is already there):

```bash
cd backend
npm install
npm start
```

Server listens on **`http://127.0.0.1:5000`**.

The frontend is configured to call this base URL (see `frontend/index.html` and other pages).
