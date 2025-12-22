# Inkjet DTS  
**Inkjet Drop density – Throughput – Spread**

**Inkjet DTS** is a minimal design model for understanding
how **print quality**, **throughput**, and **dot spread**
are causally coupled in inkjet printing systems.

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| 🇺🇸 English | [![GitHub Pages EN](https://img.shields.io/badge/GitHub%20Pages-English-brightgreen?logo=github)](https://samizo-aitl.github.io/inkjet-dts/) | [![GitHub Repo EN](https://img.shields.io/badge/GitHub-English-blue?logo=github)](https://github.com/Samizo-AITL/inkjet-dts/tree/main) |

[![Back to Samizo-AITL Portal](https://img.shields.io/badge/Back%20to%20Samizo--AITL%20Portal-brightgreen)](https://samizo-aitl.github.io) 

---

## Overview

This page presents a **minimal educational model** for understanding the
fundamental trade-off in inkjet printing between:

- **Print quality**
- **Printing speed**

The model is intentionally simplified.  
Its purpose is to clarify **design causality**, not to reproduce the behavior
of real printers or specific products.

---

## Directory Structure

This repository is organized to clearly separate **theoretical modeling**, **simulation code**, and **visual outputs**.

```
inkjet-dts/
├─ _config.yml
├─ index.md
├─ README.md
│
├─ _layouts/
│  └─ default.html
│
├─ _includes/
│  └─ head.html
│
├─ assets/
│  └─ css/
│     └─ style.css
│
├─ demo/
│  ├─ index.html     
│  └─ demo.js
│
├─ code/
│  ├─ main.py
│  ├─ model.py
│  └─ render.py
│
└─ images/
   ├─ print_fast.png
   ├─ print_high_quality.png
   ├─ print_large_dot.png
   └─ print_small_dot.png
```

---

## Design Intent

- **`code/`** contains a minimal but explicit Python model of inkjet trade-offs  
- **`images/`** visualizes how parameter choices affect dot spread and print quality  
- **GitHub Pages** is used to document the model, not to execute it

This separation keeps the system easy to understand, extend, and reuse for educational purposes.

---

## Dominant axes (D–T–S)

Inkjet printing behavior can be reduced to three dominant axes:

- **D — Drop density**  
  Number of ink drops per unit area  
  → governs graininess and perceived image quality

- **T — Throughput**  
  Ink ejection capability per unit time  
  → limits achievable printing speed

- **S — Spread**  
  Dot spread on the medium (ink–paper interaction)  
  → determines sharpness versus bleeding

Most practical parameters  
(dpi, passes, drop size, color count, nozzle count)  
can be expressed as combinations of these three axes.

---

## Visualization examples

### Graininess vs. quality

**Lower drop density (FAST mode)**

<img src="https://samizo-aitl.github.io/inkjet-dts/images/print_fast.png"
     alt="FAST"
     style="width:60%; max-width:600px; display:block; margin:auto;" />

**Higher drop density (HIGH QUALITY mode)**

<img src="https://samizo-aitl.github.io/inkjet-dts/images/print_high_quality.png"
     alt="HIGH QUALITY"
     style="width:60%; max-width:600px; display:block; margin:auto;" />

---

### Dot spread effect

**Small dot (sharper edges)**

<img src="https://samizo-aitl.github.io/inkjet-dts/images/print_small_dot.png"
     alt="SMALL DOT"
     style="width:60%; max-width:600px; display:block; margin:auto;" />

**Large dot (increased bleeding)**

<img src="https://samizo-aitl.github.io/inkjet-dts/images/print_large_dot.png"
     alt="LARGE DOT"
     style="width:60%; max-width:600px; display:block; margin:auto;" />

---

## ▶ Interactive Animation Demo

**Inkjet DTS (Drop Density – Throughput – Spread)**  
This interactive animation visualizes the trade-off between print quality and speed.

👉 **[Launch Demo](./demo/)**

---

## Notes

- The images shown above are **synthetic visualizations**, not measured print data.
- They are designed to make qualitative differences **immediately visible**.
- Numerical accuracy and product-specific tuning are intentionally out of scope.

---

## Purpose

This project is intended to support:

- engineering education
- early-stage design discussions
- clear explanation of inkjet trade-offs

by keeping the model **simple, executable, and visual**.

---

## 👤 Author

| 📌 Item | Details |
|--------|---------|
| **Name** | Shinichi Samizo |
| **Education** | M.S. in Electrical and Electronic Engineering, Shinshu University |
| **Career** | Former Engineer at Seiko Epson Corporation (since 1997) |
| **Expertise** | Semiconductor devices (logic, memory, high-voltage mixed-signal)<br>Thin-film piezo actuators for inkjet systems<br>PrecisionCore printhead productization, BOM management, ISO training |
| **Email** | [![Email](https://img.shields.io/badge/Email-shin3t72%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:shin3t72@gmail.com) |
| **X (Twitter)** | [![X](https://img.shields.io/badge/X-@shin3t72-black?style=for-the-badge&logo=x)](https://x.com/shin3t72) |
| **GitHub** | [![GitHub](https://img.shields.io/badge/GitHub-Samizo--AITL-blue?style=for-the-badge&logo=github)](https://github.com/Samizo-AITL) |

---

## 📄 License

[![Hybrid License](https://img.shields.io/badge/license-Hybrid-blueviolet)](https://samizo-aitl.github.io/inkjet-dts//#-license)

| Item | License | Description |
|------|---------|-------------|
| **Source Code** | MIT | Free to use, modify, redistribute |
| **Text Materials** | CC BY 4.0 / CC BY-SA 4.0 | Attribution & share-alike rules |
| **Figures & Diagrams** | CC BY-NC 4.0 | Non-commercial use |
| **External References** | Original license applies | Cite properly |

---

## 💬　Feedback

> Suggestions, improvements, and discussions are welcome via GitHub Discussions.

[![💬 GitHub Discussions](https://img.shields.io/badge/💬%20GitHub-Discussions-brightgreen?logo=github)](https://github.com/Samizo-AITL/inkjet-dts/discussions)


