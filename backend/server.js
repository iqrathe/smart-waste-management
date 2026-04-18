const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const zones = [1, 2, 3, 4, 5];

const bins = [];
for (const zone of zones) {
  for (let binNum = 1; binNum <= 10; binNum += 1) {
    bins.push({
      id: `Z${zone}B${binNum}`,
      zone,
      binNum,
      waste: {
        paper: 0,
        plastic: 0,
        metal: 0,
        organic: 0,
        liquid: 0,
        total_average: 0
      }
    });
  }
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function updateBins() {
  // Deterministic demo values to mimic live changing bin conditions.
  bins.forEach((binData) => {
    const { zone, binNum } = binData;
    const seed = (zone * 31 + binNum * 17) % 101;
    const loadFactor = (zone + binNum) % 4;

    const paper = clamp(seed + 8 * loadFactor, 0, 100);
    const plastic = clamp(seed + 12 + 6 * loadFactor, 0, 100);
    const metal = clamp(seed - 10 + 5 * loadFactor, 0, 100);
    const organic = clamp(seed + 5 + 7 * loadFactor, 0, 100);
    const liquid = clamp(seed - 4 + 4 * loadFactor, 0, 100);

    // Make some bins intentionally high for dispatch testing.
    const highPriorityBoost = (binNum === 7 || binNum === 1) ? 18 : 0;

    const finalPaper = clamp(paper + highPriorityBoost, 0, 100);
    const finalPlastic = clamp(plastic + highPriorityBoost, 0, 100);
    const finalMetal = clamp(metal + highPriorityBoost, 0, 100);
    const finalOrganic = clamp(organic + highPriorityBoost, 0, 100);
    const finalLiquid = clamp(liquid + highPriorityBoost, 0, 100);

    const totalAverage = Number(
      ((finalPaper + finalPlastic + finalMetal + finalOrganic) / 4).toFixed(1)
    );

    binData.waste = {
      paper: finalPaper,
      plastic: finalPlastic,
      metal: finalMetal,
      organic: finalOrganic,
      liquid: finalLiquid,
      total_average: totalAverage
    };
  });
}

app.get("/bins", (_req, res) => {
  updateBins();
  res.json(bins);
});

app.get("/dispatch", (_req, res) => {
  updateBins();
  const urgentBins = [];

  for (const binData of bins) {
    const fillPercentage = binData.waste.total_average;
    let priority = null;

    if (fillPercentage > 90) {
      priority = "HIGH";
    } else if (fillPercentage > 75) {
      priority = "MEDIUM";
    }

    if (!priority) {
      continue;
    }

    urgentBins.push({
      id: binData.id,
      zone: binData.zone,
      fill_percentage: Number(fillPercentage.toFixed(1)),
      priority
    });
  }

  urgentBins.sort((a, b) => {
    if (a.priority === b.priority) {
      return b.fill_percentage - a.fill_percentage;
    }
    return a.priority === "HIGH" ? -1 : 1;
  });

  res.json(urgentBins);
});

app.get("/stats", (_req, res) => {
  updateBins();

  // Daily waste is the total of all bins' waste amounts (excluding derived average).
  let totalWaste = 0;
  for (const binData of bins) {
    totalWaste += Object.entries(binData.waste)
      .filter(([key]) => key !== "total_average")
      .reduce((sum, [, value]) => sum + value, 0);
  }

  res.json({
    total_waste: totalWaste,
    daily_generated: totalWaste
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Smart waste backend running on http://127.0.0.1:${PORT}`);
});

