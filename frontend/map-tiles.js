/**
 * Reliable Leaflet basemaps for local/dashboard use.
 * openstreetmap.org tiles often show "Access blocked" when embedded; we prefer Carto + Esri fallbacks.
 */
(function (global) {
  function attachBasemap(map, options) {
    if (!map || typeof L === "undefined") return;

    options = options || {};
    const maxZoom = options.maxZoom != null ? options.maxZoom : 19;

    function makeLayer(url, attribution) {
      return L.tileLayer(url, {
        attribution,
        maxZoom: maxZoom,
        minZoom: 1
      });
    }

    const stack = [
      {
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" rel="noreferrer">CARTO</a>'
      },
      {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        attribution:
          "Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics, and the GIS User Community"
      },
      {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" rel="noreferrer">OpenStreetMap</a> contributors'
      }
    ];

    let idx = 0;
    let active = makeLayer(stack[idx].url, stack[idx].attribution);
    active.addTo(map);

    let errCount = 0;
    const ERR_BEFORE_SWITCH = 5;

    function switchToNext() {
      errCount = 0;
      idx += 1;
      if (idx >= stack.length) {
        idx = stack.length - 1;
        return;
      }
      try {
        map.removeLayer(active);
      } catch (_) {}
      active = makeLayer(stack[idx].url, stack[idx].attribution);
      active.addTo(map);
      active.on("tileload", onTileLoad);
      active.on("tileerror", onTileError);
      console.warn("DIP map: switched basemap provider (" + idx + ")");
    }

    function onTileLoad() {
      errCount = 0;
    }

    function onTileError() {
      errCount += 1;
      if (errCount >= ERR_BEFORE_SWITCH) {
        switchToNext();
      }
    }

    active.on("tileload", onTileLoad);
    active.on("tileerror", onTileError);
  }

  global.DIP_MAP_TILES = { attachBasemap };
})(typeof window !== "undefined" ? window : globalThis);
