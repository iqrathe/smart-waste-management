# Frontend (Dashboard UI)

Static HTML/CSS/JS pages for the Smart Waste Management system. They talk to the Node API at **`http://127.0.0.1:5000`** (defined in each page’s script as `API`).

## Files

| File | Role |
|------|------|
| `index.html` | Main dashboard: Dhaka stats, dispatch list, Leaflet map, navigation |
| `zones.html` | All 5 zones with per-bin category bars; polls `/bins` |
| `zones-info.html` | Editable zone areas + bin “place in Dhaka” table + map |
| `zone-waste-analysis.html` | Zone-wise illustrative waste/recycling narrative (not live API data) |
| `i18n.js` | English / বাংলা strings, `localStorage` key `dip_lang_v1`, `DIP_I18N` helpers |
| `map-tiles.js` | Shared Leaflet basemap stack (Carto → Esri → OSM) to avoid blocked tiles |

## Features (matches current code)

### Language

- Toggle **English** / **বাংলা** in the top bar (all main pages).
- Preference persists in **`localStorage`** (`dip_lang_v1`).
- Dynamic lists (dispatch, zones table, zone analysis cards) refresh on language change via the `dip-lang-change` event.

### Maps (`index.html`, `zones-info.html`)

- **Leaflet** with basemaps from `map-tiles.js`: primary **CARTO**, then **Esri**, then **OpenStreetMap** if earlier layers fail.
- Open `index.html` / `zones-info.html` over **http://** (e.g. a static server) when possible so `map-tiles.js` and `i18n.js` load reliably; `file://` can block subresources on some browsers.

### Main dashboard (`index.html`)

- Polls every **3s**: `/bins`, `/dispatch`, `/stats`.
- **Daily waste** card uses `daily_generated` from `/stats` (same aggregate rules as backend README).
- Map popups and dispatch labels use `i18n.js` when the language is switched.

### Zone levels (`zones.html`)

- Polls `/bins` every 3s; renders bins grouped by zone with category bars (paper, plastic, metal, organic, total average).

### Zones info (`zones-info.html`)

- Polls `/bins` every 3s for the bin list.
- **Zone text** and **bin location** inputs are stored in **`localStorage`**: `dip_zone_meta_v1`, `dip_bin_places_v1`.
- Table **re-renders** only when bin id/zone layout from the API changes (not on every waste tick), so typing stays smooth; **search** is **debounced** (200ms).
- Map uses the same `map-tiles.js` stack as the dashboard.

### Zone-wise waste analysis (`zone-waste-analysis.html`)

- Static, illustrative copy (tonnes, composition, recycling notes) for the five zones — **not** connected to `/bins`. Source disclaimer is on the page.

## Open the UI

1. Start the backend (`../backend`, `npm start`).
2. Serve this folder over HTTP, for example:

   ```bash
   npx --yes serve -l 3000 .
   ```

   Then open `http://127.0.0.1:3000/index.html` (or the URL `serve` prints).

3. Or open `index.html` directly if your browser allows local scripts; maps/i18n work best with a real URL.
