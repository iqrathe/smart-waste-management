# Frontend (Dashboard UI)

This folder contains all frontend pages of the Smart Waste Management system.

## Files

- `index.html` -> Main dashboard (daily waste, dispatch, map, links to zone pages)
- `zones.html` -> Zone-wise bin fill levels and category bars
- `zones-info.html` -> Zone place info + bin place mapping and map

## How it works

All pages are plain HTML/CSS/JS and call the Node.js API:

- API base: `http://127.0.0.1:5000`

### Main dashboard (`index.html`)

- Polls backend every 3 seconds
- Fetches:
  - `/bins` (to keep data current)
  - `/dispatch` (urgent dispatch list)
  - `/stats` (daily waste generated)
- Daily waste shown on the card comes from backend total of all bin waste amounts.

### Zone levels (`zones.html`)

- Polls `/bins` every 3 seconds
- Renders each zone and all bins with category progress bars.

### Zone info (`zones-info.html`)

- Shows zone-level Dhaka area info and bin location table
- Fetches `/bins` for bin list and zone references
- Uses map markers for Dhaka + zones
- User-entered zone/bin place labels are stored in browser `localStorage`.

## Open frontend

After starting backend, open:

- `frontend/index.html`

You can open the other pages from dashboard buttons.

