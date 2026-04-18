# Backend (Node.js API)

This folder contains the Node.js/Express API server for the Smart Waste Management dashboard.

## Files

- `server.js`: Express backend that serves bins, dispatch recommendations, and stats.
- `package.json`: Node scripts and dependencies.

## Endpoints

- `GET /bins`
  - Returns all bins with current waste levels.
- `GET /dispatch`
  - Returns urgent bins (priority-based dispatch list).
- `GET /stats`
  - Returns overall waste stats used by dashboard cards.

## How it works

The backend keeps 50 bins (5 zones x 10 bins). Each bin has:

- `paper`
- `plastic`
- `metal`
- `organic`
- `liquid`
- `total_average` (derived)

On each endpoint call, `updateBins()` refreshes current bin values and recalculates `total_average`.

### Daily waste calculation

`daily_generated` is computed from the sum of all bins' waste amounts (excluding `total_average`), so it always updates according to bin waste values.

## Run backend

From project root:

```bash
cd backend
npm install
npm start
```

Backend URL:

- `http://127.0.0.1:5000`

