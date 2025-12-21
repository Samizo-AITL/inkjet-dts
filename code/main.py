# main.py
from model import area_speed_m2ph, ink_usage_ml_per_m2, grain_index

# 共通条件（家庭用想定）
dpi = 600
print_width = 0.21  # A4幅 [m]
nozzle_rows = 2
fire_khz = 12.0
colors = 4
drop_pl = 1.5


cases = {
    "FAST": {
        "passes": 1,
        "drops_per_pixel": 1.0,
    },
    "HIGH_QUALITY": {
        "passes": 4,
        "drops_per_pixel": 2.0,
    },
}


for name, c in cases.items():
    speed = area_speed_m2ph(
        dpi_sub=dpi,
        passes=c["passes"],
        nozzle_rows=nozzle_rows,
        fire_khz=fire_khz,
        print_width_m=print_width,
    )

    ink = ink_usage_ml_per_m2(
        dpi_x=dpi,
        dpi_y=dpi,
        drops_per_pixel=c["drops_per_pixel"],
        colors=colors,
        drop_pl=drop_pl,
    )

    grain = grain_index(c["drops_per_pixel"])

    print(f"\n=== {name} ===")
    print(f"Area speed      : {speed:.1f} m^2/h")
    print(f"Ink usage       : {ink:.1f} mL/m^2")
    print(f"Grain index     : {grain:.3f}")

from render import render_print_png

# 疑似印字画像の生成
render_print_png(
    filename="print_fast.png",
    dpi=dpi,
    drops_per_pixel=1.0,
    dot_radius_px=2,
    seed=1,
)

render_print_png(
    filename="print_high_quality.png",
    dpi=dpi,
    drops_per_pixel=2.0,
    dot_radius_px=2,
    seed=1,
)

# dot径は同じ、滴数だけ変える
render_print_png(
    filename="print_fast.png",
    dpi=dpi,
    drops_per_pixel=1.0,
    dot_radius_px=2,
    seed=1,
)

render_print_png(
    filename="print_high_quality.png",
    dpi=dpi,
    drops_per_pixel=2.0,
    dot_radius_px=2,
    seed=1,
)

render_print_png(
    filename="print_small_dot.png",
    dpi=dpi,
    drops_per_pixel=1.5,
    dot_radius_px=1,
    seed=1,
)

render_print_png(
    filename="print_large_dot.png",
    dpi=dpi,
    drops_per_pixel=1.5,
    dot_radius_px=3,
    seed=1,
)
