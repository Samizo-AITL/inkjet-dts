# inkjet-dts

Minimal educational model of inkjet printing trade-offs: **quality vs speed**.

This repository provides a **simple, physics-inspired model** to understand how
inkjet print quality and printing speed are fundamentally constrained by a small
set of dominant parameters.

The goal is **not** to reproduce real printers, but to clarify **design causality**.

---

## What this explains

Inkjet printing behavior is organized using three dominant axes:

- **D (Drop density)**  
  Number of ink drops per unit area  
  → controls perceived image quality and graininess

- **T (Throughput)**  
  Ink ejection capability per unit time  
  → controls printing speed

- **S (Spread)**  
  Dot spread on media (ink + paper interaction)  
  → controls sharpness vs bleeding

Most practical parameters (dpi, passes, drop size, colors, nozzle count)
can be reduced to these three axes.

---

## What this is NOT

- ❌ A real printer simulator  
- ❌ A product benchmark or performance comparison  
- ❌ A manufacturer-specific model  

This is an **educational and conceptual tool**.

---

## Repository structure

