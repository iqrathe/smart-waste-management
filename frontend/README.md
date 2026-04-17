
# ♻️ Smart Waste Management Dashboard (Frontend)

## 📌 Overview

This project is a **web-based Smart Waste Management Dashboard** designed to monitor waste collection across different zones in Dhaka city.

It visualizes:

* Bin fill levels
* Waste type distribution (paper, plastic, metal, organic, liquid)
* Zone-wise monitoring
* Truck dispatch recommendations
* Live map of waste zones

The system helps improve **waste collection efficiency and decision-making**.

---

## 🚀 Features

### 🗂 Zone-Based Monitoring

* 5 different zones in Dhaka
* Each zone contains multiple smart bins
* Real-time visualization of bin status

### 🗑 Waste Classification Display

Each bin shows:

* Paper
* Plastic
* Metal
* Organic
* Liquid

Using dynamic progress bars.

### 🚛 Smart Dispatch System

* Automatically detects overloaded bins
* Suggests which bins need urgent collection

### 🗺 Interactive Map

* Built using Leaflet.js
* Displays zone locations on map
* Helps visualize coverage area

### 📊 Dashboard UI

* Modern responsive design
* Card-based layout
* Hover effects and tooltips

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling (Modern UI + gradients + animations)
* **JavaScript (Vanilla JS)** – Logic & dynamic updates
* **Leaflet.js** – Interactive maps
* **OpenStreetMap API** – Map tiles

---

## 📁 Project Structure

```bash
frontend/
│
├── index.html      # Main dashboard UI
├── style (inline)  # Embedded CSS styling
├── script (inline) # JavaScript logic
```

---

## ⚙️ How It Works

1. Predefined zones are created with coordinates
2. Bins are dynamically generated for each zone
3. Random waste data simulates real-time fill levels
4. Waste percentages are displayed using progress bars
5. System calculates total fill level
6. If threshold exceeds → dispatch recommendation is triggered
7. Map shows all zones visually

---

## ▶️ How to Run

1. Download or clone the repository:

```bash
git clone https://github.com/iqrathe/smart-waste-management.git
```

2. Go to frontend folder:

```bash
cd frontend
```

3. Open `index.html` in browser:

* Double click OR
* Right click → Open with browser

---

## 💡 Future Improvements

* Connect with real IoT sensors
* Real-time API integration
* Database for storing bin data
* Mobile app integration
* AI-based waste classification

---

## 🎯 Purpose

This project is built to:

* Improve urban waste management
* Reduce overflow of bins
* Optimize garbage collection routes
* Raise awareness about waste distribution

