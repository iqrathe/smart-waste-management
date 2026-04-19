/**
 * DIP Smart Waste — English / বাংলা (Bangla) UI strings
 * Persists choice in localStorage (dip_lang_v1).
 */
(function (global) {
  const STORAGE_KEY = "dip_lang_v1";

  const STRINGS = {
    en: {
      "meta.title.dashboard": "Smart Waste Management Dashboard",
      "meta.title.zones": "Zones Overview • Smart Waste Management",
      "meta.title.zonesInfo": "Zones Info • Smart Waste Management",
      "meta.title.zoneAnalysis": "Zone-wise Waste Analysis • Smart Waste Management",

      "lang.label": "Language",
      "lang.en": "English",
      "lang.bn": "বাংলা",

      "dashboard.brandTitle": "Smart Waste Management Dashboard",
      "dashboard.brandSubtitle": "Dhaka City • Real-time bin fill levels & dispatch recommendations",
      "dashboard.pillLive": "Live",
      "dashboard.pillLivePrefix": "",
      "dashboard.pillLiveSuffix": "updates",
      "dashboard.pillEvery": "every",
      "dashboard.pill3s": "3s",
      "dashboard.statPopLabel": "Dhaka metropolitan population (est.)",
      "dashboard.statPopTitle": "Illustrative figure for the dashboard; see Zone-wise Waste Analysis for data notes",
      "dashboard.statPopHint": "Greater Dhaka urban agglomeration, rounded (baseline: BBS Census 2022 + projected growth to 2026).",
      "dashboard.statWasteLabel": "Daily waste generated in Dhaka",
      "dashboard.statZonesLabel": "Administrative zones in this system",
      "dashboard.statZonesValue": "5 zones",
      "dashboard.statZonesHint": "North, South, East, West & Central — see zone-wise breakdown.",
      "dashboard.btnAnalysis": "Zone-wise Waste Analysis",
      "dashboard.btnZonesInfo": "Zones info",
      "dashboard.btnZonesLevels": "Zones levels",
      "dashboard.dispatchTitle": "Dispatch recommendations",
      "dashboard.dispatchPill": "Priority first",
      "dashboard.mapTitle": "Map",
      "dashboard.mapPill": "Dhaka",
      "dashboard.loading": "Loading...",
      "dashboard.errorData": "Error loading data. Please check if the server is running.",
      "dashboard.errorDispatch": "Error loading dispatch data.",
      "dashboard.noUrgent": "No urgent bins at the moment",
      "dashboard.dispatchLine": "{id} (Zone {zone})",
      "dashboard.dispatchPriority": "{priority} ({pct}%)",

      "zones.brandTitle": "Zones overview",
      "zones.brandSubtitle": "All zones & bins • Live updates",
      "zones.pillEvery": "every",
      "zones.btnBack": "Back to dashboard",
      "zones.btnAnalysis": "Zone-wise Waste Analysis",
      "zones.btnInfo": "Zones info",
      "zones.panelTitle": "Zones details",
      "zones.pillLive": "Live",
      "zones.loading": "Loading zones...",
      "zones.error": "Error loading zones. Please check if the server is running.",
      "zones.zoneTitle": "Zone {n}",
      "zones.binsCount": "{n} bins",
      "zones.severity.high": "High",
      "zones.severity.medium": "Medium",
      "zones.severity.low": "Low",

      "zonesInfo.brandTitle": "Zones info",
      "zonesInfo.brandSubtitle": "Zone → Dhaka areas • Bin → exact place (editable)",
      "zonesInfo.pillUpdates": "updates every",
      "zonesInfo.btnBack": "Back to dashboard",
      "zonesInfo.btnAnalysis": "Zone-wise Waste Analysis",
      "zonesInfo.btnLevels": "Zones levels",
      "zonesInfo.pillSaved": "Bin places are saved automatically",
      "zonesInfo.panelAreas": "Zone areas (editable)",
      "zonesInfo.pillCustomize": "Customize",
      "zonesInfo.hintAreas": "Add the Dhaka areas covered by each zone.",
      "zonesInfo.panelMap": "Zones map",
      "zonesInfo.pillDhaka": "Dhaka",
      "zonesInfo.panelBins": "Bin locations (editable)",
      "zonesInfo.pillSearch": "Search",
      "zonesInfo.searchPlaceholder": "Search by bin ID, zone, or place (e.g., “B-12”, “Zone 3”, “Mirpur”)",
      "zonesInfo.loadingBins": "Loading bins...",
      "zonesInfo.thBin": "Bin",
      "zonesInfo.thZone": "Zone",
      "zonesInfo.thPlace": "Place in Dhaka (you type)",
      "zonesInfo.errorBins": "Error loading bins. Please check if the server is running.",
      "zonesInfo.zoneCardTitle": "Zone {n}: {label}",
      "zonesInfo.hintCovered": "Dhaka areas covered",
      "zonesInfo.fieldPlaceholder": "Type Dhaka area names for this zone…",
      "zonesInfo.binPlaceholder": "Type place (e.g., Uttara, Dhanmondi, Gulshan…)",
      "zonesInfo.mapCenterPopup": "Dhaka City Center",
      "zonesInfo.mapZonePopup": "<b>Zone {n}: {label}</b><br>{areas}",

      "analysis.brandTitle": "Zone-wise Waste Analysis",
      "analysis.brandSubtitle": "Dhaka • Daily generation, composition & recycling potential by zone",
      "analysis.pillZones": "{n} administrative zones",
      "analysis.btnBack": "Back to dashboard",
      "analysis.btnLevels": "Zones levels",
      "analysis.btnInfo": "Zones info",
      "analysis.sourceTitle": "Where this information comes from",
      "analysis.sourceP1": "The figures on this page are <strong>illustrative estimates</strong> prepared for this dashboard. They are <strong>not</strong> live sensor readings. They combine typical municipal solid waste (MSW) patterns reported for large South Asian cities with a simple split across the five zones used in this project (North, South, East, West, Central).",
      "analysis.sourceLi1": "<strong>Total daily waste and per-zone tonnes:</strong> Rounded from ranges commonly cited in waste-management literature and city reports for Dhaka (order of magnitude: several thousand tonnes per day city-wide), then distributed by assumed population density and activity (markets, commerce, industry).",
      "analysis.sourceLi2": "<strong>Waste type shares (organic, plastic, paper, metal, other):</strong> Based on typical MSW composition for Dhaka and similar cities (high organic fraction; plastic and paper significant; metal smaller).",
      "analysis.sourceLi3": "<strong>Recycling potential:</strong> Shown as an estimated share of daily generation that could be recovered through source separation, formal recycling, and composting if collection and processing were fully effective—aligned with typical recovery rates quoted in developing-city waste studies (often a minority of total MSW).",
      "analysis.sourceP2": "For official statistics, refer to <strong>Bangladesh Bureau of Statistics</strong> publications, <strong>DNCC / DSCC</strong> solid waste reports, and peer-reviewed or government environmental assessments. Replace these demo values with your own cited dataset when publishing formally.",
      "analysis.sum1Label": "City-wide MSW (all 5 zones)",
      "analysis.sum1Value": "4,200 t/day",
      "analysis.sum1Hint": "Approximate combined daily generation used for this demo model.",
      "analysis.sum2Label": "Highest-generation zone",
      "analysis.sum2Value": "Zone 5",
      "analysis.sum2Hint": "Central commercial & dense mixed use (model assumption).",
      "analysis.sum3Label": "Typical city recycling potential",
      "analysis.sum3Value": "18–24%",
      "analysis.sum3Hint": "Of daily MSW, if sorting and processing were optimized (literature range).",
      "analysis.metricDaily": "Estimated daily MSW",
      "analysis.metricTonnes": "{n} tonnes",
      "analysis.dominateTitle": "Types that dominate here",
      "analysis.compTitle": "Model composition (share of zone MSW)",
      "analysis.recycleHead": "Recycling & recovery potential (model)",
      "analysis.recycleBody": "About <strong>{pct}%</strong> of this zone’s daily MSW (~<strong>{t} tonnes/day</strong>) could be recycled or composted under strong source separation, collection, and processing—plastics & metals to recycling, organics to compost or biogas, paper to mills.",
      "analysis.zoneTag": "{n} t/day",

      "waste.paper": "Paper",
      "waste.plastic": "Plastic",
      "waste.metal": "Metal",
      "waste.organic": "Organic",
      "waste.other": "Other",
      "waste.totalAvg": "Total Avg",

      "common.kg": "kg",
      "common.zone": "Zone",
      "priority.HIGH": "HIGH",
      "priority.MEDIUM": "MEDIUM",
      "priority.LOW": "LOW",

      "map.dhakaCenter": "Dhaka City Center",
      "map.zone": "Zone {n}"
    },

    bn: {
      "meta.title.dashboard": "স্মার্ট বর্জ্য ব্যবস্থাপনা ড্যাশবোর্ড",
      "meta.title.zones": "জোনের সারসংক্ষেপ • স্মার্ট বর্জ্য ব্যবস্থাপনা",
      "meta.title.zonesInfo": "জোনের তথ্য • স্মার্ট বর্জ্য ব্যবস্থাপনা",
      "meta.title.zoneAnalysis": "জোনভিত্তিক বর্জ্য বিশ্লেষণ • স্মার্ট বর্জ্য ব্যবস্থাপনা",

      "lang.label": "ভাষা",
      "lang.en": "English",
      "lang.bn": "বাংলা",

      "dashboard.brandTitle": "স্মার্ট বর্জ্য ব্যবস্থাপনা ড্যাশবোর্ড",
      "dashboard.brandSubtitle": "ঢাকা শহর • রিয়েল-টাইম বিন ভর্তির মাত্রা ও প্রেরণ সুপারিশ",
      "dashboard.pillLive": "লাইভ",
      "dashboard.pillLivePrefix": "",
      "dashboard.pillLiveSuffix": "হালনাগাদ",
      "dashboard.pillEvery": "প্রতি",
      "dashboard.pill3s": "৩ সেকেন্ড",
      "dashboard.statPopLabel": "ঢাকা মহানগর জনসংখ্যা (আনুমানিক)",
      "dashboard.statPopTitle": "ড্যাশবোর্ডের জন্য নির্দেশক সংখ্যা; বিস্তারিত জোনভিত্তিক বিশ্লেষণ পাতায়",
      "dashboard.statPopHint": "বৃহত্তর ঢাকা শহরাঞ্চল, গোলাকার (ভিত্তি: বিবিএস আদমশুমারি ২০২২ + ২০২৬ পর্যন্ত প্রক্ষেপণ)।",
      "dashboard.statWasteLabel": "ঢাকায় দৈনিক উৎপাদিত বর্জ্য",
      "dashboard.statZonesLabel": "এই সিস্টেমের প্রশাসনিক জোন",
      "dashboard.statZonesValue": "৫টি জোন",
      "dashboard.statZonesHint": "উত্তর, দক্ষিণ, পূর্ব, পশ্চিম ও কেন্দ্রীয় — জোনভিত্তিক বিভাজন দেখুন।",
      "dashboard.btnAnalysis": "জোনভিত্তিক বর্জ্য বিশ্লেষণ",
      "dashboard.btnZonesInfo": "জোনের তথ্য",
      "dashboard.btnZonesLevels": "জোনের স্তর",
      "dashboard.dispatchTitle": "প্রেরণ সুপারিশ",
      "dashboard.dispatchPill": "আগে অগ্রাধিকার",
      "dashboard.mapTitle": "মানচিত্র",
      "dashboard.mapPill": "ঢাকা",
      "dashboard.loading": "লোড হচ্ছে...",
      "dashboard.errorData": "ডেটা লোড করা যায়নি। সার্ভার চালু আছে কিনা দেখুন।",
      "dashboard.errorDispatch": "প্রেরণ তথ্য লোড করা যায়নি।",
      "dashboard.noUrgent": "এখন জরুরি বিন নেই",
      "dashboard.dispatchLine": "{id} (জোন {zone})",
      "dashboard.dispatchPriority": "{priority} ({pct}%)",

      "zones.brandTitle": "জোনের সারসংক্ষেপ",
      "zones.brandSubtitle": "সব জোন ও বিন • লাইভ হালনাগাদ",
      "zones.pillEvery": "প্রতি",
      "zones.btnBack": "ড্যাশবোর্ডে ফিরুন",
      "zones.btnAnalysis": "জোনভিত্তিক বর্জ্য বিশ্লেষণ",
      "zones.btnInfo": "জোনের তথ্য",
      "zones.panelTitle": "জোনের বিবরণ",
      "zones.pillLive": "লাইভ",
      "zones.loading": "জোন লোড হচ্ছে...",
      "zones.error": "জোন লোড করা যায়নি। সার্ভার চালু আছে কিনা দেখুন।",
      "zones.zoneTitle": "জোন {n}",
      "zones.binsCount": "{n}টি বিন",
      "zones.severity.high": "উচ্চ",
      "zones.severity.medium": "মাঝারি",
      "zones.severity.low": "নিম্ন",

      "zonesInfo.brandTitle": "জোনের তথ্য",
      "zonesInfo.brandSubtitle": "জোন → ঢাকার এলাকা • বিন → সুনির্দিষ্ট স্থান (সম্পাদনাযোগ্য)",
      "zonesInfo.pillUpdates": "হালনাগাদ প্রতি",
      "zonesInfo.btnBack": "ড্যাশবোর্ডে ফিরুন",
      "zonesInfo.btnAnalysis": "জোনভিত্তিক বর্জ্য বিশ্লেষণ",
      "zonesInfo.btnLevels": "জোনের স্তর",
      "zonesInfo.pillSaved": "বিনের স্থান স্বয়ংক্রিয়ভাবে সংরক্ষিত হয়",
      "zonesInfo.panelAreas": "জোনের এলাকা (সম্পাদনাযোগ্য)",
      "zonesInfo.pillCustomize": "কাস্টমাইজ",
      "zonesInfo.hintAreas": "প্রতিটি জোনে ঢাকার কোন এলাকাগুলো পড়েছে যোগ করুন।",
      "zonesInfo.panelMap": "জোনের মানচিত্র",
      "zonesInfo.pillDhaka": "ঢাকা",
      "zonesInfo.panelBins": "বিনের অবস্থান (সম্পাদনাযোগ্য)",
      "zonesInfo.pillSearch": "খুঁজুন",
      "zonesInfo.searchPlaceholder": "বিন আইডি, জোন বা স্থান দিয়ে খুঁজুন (যেমন “B-12”, “জোন ৩”, “মিরপুর”)",
      "zonesInfo.loadingBins": "বিন লোড হচ্ছে...",
      "zonesInfo.thBin": "বিন",
      "zonesInfo.thZone": "জোন",
      "zonesInfo.thPlace": "ঢাকায় স্থান (আপনি লিখুন)",
      "zonesInfo.errorBins": "বিন লোড করা যায়নি। সার্ভার চালু আছে কিনা দেখুন।",
      "zonesInfo.zoneCardTitle": "জোন {n}: {label}",
      "zonesInfo.hintCovered": "ঢাকার যে এলাকাগুলো অন্তর্ভুক্ত",
      "zonesInfo.fieldPlaceholder": "এই জোনের ঢাকার এলাকার নাম লিখুন…",
      "zonesInfo.binPlaceholder": "স্থান লিখুন (যেমন উত্তরা, ধানমন্ডি, গুলশান…)",
      "zonesInfo.mapCenterPopup": "ঢাকা শহর কেন্দ্র",
      "zonesInfo.mapZonePopup": "<b>জোন {n}: {label}</b><br>{areas}",

      "analysis.brandTitle": "জোনভিত্তিক বর্জ্য বিশ্লেষণ",
      "analysis.brandSubtitle": "ঢাকা • জোন অনুযায়ী দৈনিক উৎপাদন, উপাদান ও পুনর্ব্যবহার সম্ভাবনা",
      "analysis.pillZones": "{n}টি প্রশাসনিক জোন",
      "analysis.btnBack": "ড্যাশবোর্ডে ফিরুন",
      "analysis.btnLevels": "জোনের স্তর",
      "analysis.btnInfo": "জোনের তথ্য",
      "analysis.sourceTitle": "এই তথ্য কোথা থেকে নেওয়া হয়েছে",
      "analysis.sourceP1": "এই পাতার সংখ্যাগুলো এই ড্যাশবোর্ডের জন্য প্রস্তুত <strong>নির্দেশক আনুমান</strong>। এগুলো <strong>লাইভ সেন্সর রিডিং নয়</strong>। দক্ষিণ এশিয়ার বড় শহরের সাধারণ পৌর কঠিন বর্জ্য (MSW) ধরনের সাথে এই প্রকল্পের পাঁচটি জোনে (উত্তর, দক্ষিণ, পূর্ব, পশ্চিম, কেন্দ্রীয়) সহজ ভাগ বসানো হয়েছে।",
      "analysis.sourceLi1": "<strong>মোট দৈনিক বর্জ্য ও প্রতি জোন টন:</strong> বর্জ্য ব্যবস্থাপনা সাহিত্য ও ঢাকার প্রতিবেদনে উল্লিখিত পরিসর থেকে গোলাকার (শহরজুড়ে প্রতিদিন কয়েক হাজার টনের মাত্রা), তারপর ধরে নেওয়া জনঘনত্ব ও কার্যক্রম (বাজার, বাণিজ্য, শিল্প) অনুযায়ী বণ্টন।",
      "analysis.sourceLi2": "<strong>বর্জ্যের ধরনের অংশ (জৈব, প্লাস্টিক, কাগজ, ধাতু, অন্যান্য):</strong> ঢাকা ও অনুরূপ শহরের সাধারণ MSW গঠনের ভিত্তিতে (বেশি জৈব অংশ; প্লাস্টিক ও কাগজ উল্লেখযোগ্য; ধাতু কম)।",
      "analysis.sourceLi3": "<strong>পুনর্ব্যবহার সম্ভাবনা:</strong> উৎস পৃথকীকরণ, আনুষ্ঠানিক রিসাইক্লিং ও কম্পোস্টিং সঠিকভাবে হলে দৈনিক উৎপাদনের কত অংশ পুনরুদ্ধার করা যেত—উন্নয়নশীল শহরের বর্জ্য অধ্যয়নে উল্লিখিত পুনরুদ্ধার হারের সাথে সামঞ্জস্যপূর্ণ (মোট MSW-এর সামান্য অংশ)।",
      "analysis.sourceP2": "সরকারি পরিসংখ্যানের জন্য <strong>বাংলাদেশ পরিসংখ্যান ব্যুরো</strong> প্রকাশনা, <strong>ডিএনসিসি / ডিএসসিসি</strong> কঠিন বর্জ্য প্রতিবেদন এবং সরকারি বা স্বীকৃত পরিবেশ মূল্যায়ন দেখুন। আনুষ্ঠানিক প্রকাশের সময় নিজের উদ্ধৃত ডেটাসেট দিয়ে এই ডেমো মান প্রতিস্থাপন করুন।",
      "analysis.sum1Label": "সমগ্র শহর MSW (সব ৫ জোন)",
      "analysis.sum1Value": "৪,২০০ টন/দিন",
      "analysis.sum1Hint": "এই ডেমো মডেলে ব্যবহৃত আনুমানিক সম্মিলিত দৈনিক উৎপাদন।",
      "analysis.sum2Label": "সর্বোচ্চ উৎপাদনকারী জোন",
      "analysis.sum2Value": "জোন ৫",
      "analysis.sum2Hint": "কেন্দ্রীয় বাণিজ্যিক ও ঘন মিশ্র ব্যবহার (মডেল ধারণা)।",
      "analysis.sum3Label": "সাধারণ শহরের পুনর্ব্যবহার সম্ভাবনা",
      "analysis.sum3Value": "১৮–২৪%",
      "analysis.sum3Hint": "দৈনিক MSW-এর কতটা, যদি বাছাই ও প্রক্রিয়াকরণ সর্বোত্তম হয় (সাহিত্যের পরিসর)।",
      "analysis.metricDaily": "আনুমানিক দৈনিক MSW",
      "analysis.metricTonnes": "{n} টন",
      "analysis.dominateTitle": "এখানে যে ধরনগুলো বেশি",
      "analysis.compTitle": "মডেল গঠন (জোনের MSW-তে অংশ)",
      "analysis.recycleHead": "রিসাইক্লিং ও পুনরুদ্ধার সম্ভাবনা (মডেল)",
      "analysis.recycleBody": "শক্তিশালী উৎস পৃথকীকরণ, সংগ্রহ ও প্রক্রিয়াকরণে এই জোনের দৈনিক MSW-র প্রায় <strong>{pct}%</strong> (~<strong>প্রতিদিন {t} টন</strong>) রিসাইক্লিং বা কম্পোস্ট করা সম্ভব—প্লাস্টিক ও ধাতু রিসাইক্লিংয়ে, জৈব কম্পোস্ট বা বায়োগ্যাসে, কাগজ কলে।",
      "analysis.zoneTag": "{n} টন/দিন",

      "waste.paper": "কাগজ",
      "waste.plastic": "প্লাস্টিক",
      "waste.metal": "ধাতু",
      "waste.organic": "জৈব",
      "waste.other": "অন্যান্য",
      "waste.totalAvg": "গড় মোট",

      "common.kg": "কেজি",
      "common.zone": "জোন",
      "priority.HIGH": "উচ্চ",
      "priority.MEDIUM": "মাঝারি",
      "priority.LOW": "নিম্ন",

      "map.dhakaCenter": "ঢাকা শহর কেন্দ্র",
      "map.zone": "জোন {n}"
    }
  };

  /** Zone-wise analysis: per-locale copy */
  const ZONE_ANALYSIS = {
    en: [
      { id: 1, name: "North Zone", dailyTonnes: 780, dominant: "Organic (kitchen & market refuse)", secondary: "Plastic packaging", composition: { organic: 58, plastic: 18, paper: 10, metal: 5, other: 9 }, recyclePercent: 20, recycleTonnes: 156, note: "Residential wards and local markets—high food waste." },
      { id: 2, name: "South Zone", dailyTonnes: 720, dominant: "Organic waste", secondary: "Plastic & single-use items", composition: { organic: 56, plastic: 19, paper: 11, metal: 6, other: 8 }, recyclePercent: 19, recycleTonnes: 137, note: "Mixed residential; riverside and transport corridors add plastic litter." },
      { id: 3, name: "East Zone", dailyTonnes: 910, dominant: "Plastic & composite packaging", secondary: "Organic (street food & markets)", composition: { organic: 48, plastic: 24, paper: 12, metal: 7, other: 9 }, recyclePercent: 22, recycleTonnes: 200, note: "Higher commercial & light industrial activity—more packaging waste." },
      { id: 4, name: "West Zone", dailyTonnes: 650, dominant: "Organic waste", secondary: "Paper & cardboard", composition: { organic: 55, plastic: 17, paper: 13, metal: 6, other: 9 }, recyclePercent: 18, recycleTonnes: 117, note: "Mixed residential; some wholesale paper/cardboard from trade." },
      { id: 5, name: "Central Zone", dailyTonnes: 1140, dominant: "Paper & plastic (offices, shops, hotels)", secondary: "Organic (restaurants & street vendors)", composition: { organic: 46, plastic: 22, paper: 14, metal: 6, other: 12 }, recyclePercent: 24, recycleTonnes: 274, note: "CBD and dense services—high throughput of packaged goods and food service waste." }
    ],
    bn: [
      { id: 1, name: "উত্তর জোন", dailyTonnes: 780, dominant: "জৈব (রান্নাঘর ও বাজারের বর্জ্য)", secondary: "প্লাস্টিক প্যাকেজিং", composition: { organic: 58, plastic: 18, paper: 10, metal: 5, other: 9 }, recyclePercent: 20, recycleTonnes: 156, note: "আবাসিক ওয়ার্ড ও স্থানীয় বাজার—খাদ্যজাত বর্জ্য বেশি।" },
      { id: 2, name: "দক্ষিণ জোন", dailyTonnes: 720, dominant: "জৈব বর্জ্য", secondary: "প্লাস্টিক ও একক ব্যবহারের জিনিস", composition: { organic: 56, plastic: 19, paper: 11, metal: 6, other: 8 }, recyclePercent: 19, recycleTonnes: 137, note: "মিশ্র আবাসিক; নদীতীর ও পরিবহন পথে প্লাস্টিক ছড়িয়ে পড়ে।" },
      { id: 3, name: "পূর্ব জোন", dailyTonnes: 910, dominant: "প্লাস্টিক ও কম্পোজিট প্যাকেজিং", secondary: "জৈব (ফুটপাতের খাবার ও বাজার)", composition: { organic: 48, plastic: 24, paper: 12, metal: 7, other: 9 }, recyclePercent: 22, recycleTonnes: 200, note: "বেশি বাণিজ্যিক ও হালকা শিল্প কার্যক্রম—প্যাকেজিং বর্জ্য বেশি।" },
      { id: 4, name: "পশ্চিম জোন", dailyTonnes: 650, dominant: "জৈব বর্জ্য", secondary: "কাগজ ও কার্ডবোর্ড", composition: { organic: 55, plastic: 17, paper: 13, metal: 6, other: 9 }, recyclePercent: 18, recycleTonnes: 117, note: "মিশ্র আবাসিক; পাইকারি কাগজ/কার্ডবোর্ড কিছু।" },
      { id: 5, name: "কেন্দ্রীয় জোন", dailyTonnes: 1140, dominant: "কাগজ ও প্লাস্টিক (অফিস, দোকান, হোটেল)", secondary: "জৈব (রেস্তোরাঁ ও ফুটপাতের বিক্রেতা)", composition: { organic: 46, plastic: 22, paper: 14, metal: 6, other: 12 }, recyclePercent: 24, recycleTonnes: 274, note: "সিবিডি ও ঘন সেবা—প্যাকেজকৃত পণ্য ও খাদ্যসেবা বর্জ্য বেশি।" }
    ]
  };

  function getLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "bn" || v === "en") return v;
    } catch (_) {}
    return "en";
  }

  function setLang(lang) {
    const next = lang === "bn" ? "bn" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
    document.documentElement.lang = next === "bn" ? "bn" : "en";
    document.documentElement.setAttribute("data-dip-lang", next);
    apply(document);
    try {
      window.dispatchEvent(new CustomEvent("dip-lang-change", { detail: { lang: next } }));
    } catch (_) {}
    syncLangButtons(next);
    return next;
  }

  function pickTable(lang) {
    return STRINGS[lang] || STRINGS.en;
  }

  function t(key, vars) {
    const lang = getLang();
    let s = pickTable(lang)[key];
    if (s === undefined) s = STRINGS.en[key];
    if (typeof s !== "string") s = key;
    if (vars && typeof vars === "object") {
      s = s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
    }
    return s;
  }

  function apply(root) {
    const r = root && root.querySelectorAll ? root : document;
    const lang = getLang();
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    document.documentElement.setAttribute("data-dip-lang", lang);

    r.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });
    r.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });
    r.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      el.placeholder = t(key);
    });
    r.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      el.title = t(key);
    });
    r.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    const pageKey = document.body && document.body.getAttribute("data-i18n-page");
    if (pageKey) {
      document.title = t("meta.title." + pageKey);
    }
    syncLangButtons(lang);
  }

  function syncLangButtons(active) {
    document.querySelectorAll(".dip-lang-btn").forEach((btn) => {
      const l = btn.getAttribute("data-lang");
      const on = l === active;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-active", on);
    });
  }

  function ensureI18nStyles() {
    if (document.getElementById("dip-i18n-styles")) return;
    const s = document.createElement("style");
    s.id = "dip-i18n-styles";
    s.textContent = `
      .dip-lang-switch {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        background: rgba(255, 255, 255, 0.85);
        box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
      }
      .dip-lang-btn {
        appearance: none;
        border: 0;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 700;
        padding: 8px 12px;
        border-radius: 999px;
        background: transparent;
        color: var(--muted, #475569);
        transition: background 0.15s ease, color 0.15s ease;
      }
      .dip-lang-btn:hover { color: var(--text, #0f172a); }
      .dip-lang-btn.is-active {
        background: linear-gradient(90deg, rgba(255, 45, 120, 0.18), rgba(124, 58, 237, 0.14));
        color: var(--text, #0f172a);
      }
    `;
    document.head.appendChild(s);
  }

  function mountLanguageSwitcher(container) {
    ensureI18nStyles();
    const el = typeof container === "string" ? document.querySelector(container) : container;
    if (!el) return;
    el.innerHTML =
      '<div class="dip-lang-switch" role="group" aria-label="' +
      escapeAttr(t("lang.label")) +
      '">' +
      '<button type="button" class="dip-lang-btn" data-lang="en">' +
      escapeHtml(STRINGS.en["lang.en"]) +
      "</button>" +
      '<button type="button" class="dip-lang-btn" data-lang="bn">' +
      escapeHtml(STRINGS.en["lang.bn"]) +
      "</button>" +
      "</div>";

    el.querySelectorAll(".dip-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const l = btn.getAttribute("data-lang");
        if (l) setLang(l);
      });
    });
    syncLangButtons(getLang());
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll("'", "&#039;");
  }

  function getZoneAnalysisRows() {
    return ZONE_ANALYSIS[getLang()] || ZONE_ANALYSIS.en;
  }

  global.DIP_I18N = {
    STORAGE_KEY,
    STRINGS,
    getLang,
    setLang,
    t,
    apply,
    mountLanguageSwitcher,
    getZoneAnalysisRows,
    ZONE_ANALYSIS
  };
})(typeof window !== "undefined" ? window : globalThis);
