---
layout: default
title: Inkjet DTS
---

# Inkjet DTS  
**Inkjet Drop density – Throughput – Spread**

---

## 🔗 Links

| Language | GitHub Pages 🌐 | GitHub 💻 |
|----------|----------------|-----------|
| 🇺🇸 English | [![GitHub Pages EN](https://img.shields.io/badge/GitHub%20Pages-English-brightgreen?logo=github)](https://samizo-aitl.github.io/inkjet-dts/) | [![GitHub Repo EN](https://img.shields.io/badge/GitHub-English-blue?logo=github)](https://github.com/Samizo-AITL/inkjet-dts/tree/main) |

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

![FAST](images/print_fast.png)

**Higher drop density (HIGH QUALITY mode)**

![HIGH QUALITY](images/print_high_quality.png)

---

### Dot spread effect

**Small dot (sharper edges)**

![SMALL DOT](images/print_small_dot.png)

**Large dot (increased bleeding)**

![LARGE DOT](images/print_large_dot.png)

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
