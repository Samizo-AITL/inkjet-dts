# model.py
# インクジェット：画質 × 速度の最小モデル（教材用）

INCH = 0.0254


def dpi_to_dpm(dpi: float) -> float:
    """dpi → dots per meter"""
    return dpi / INCH


def area_speed_m2ph(
    dpi_sub: float,
    passes: int,
    nozzle_rows: int,
    fire_khz: float,
    print_width_m: float,
) -> float:
    """
    面積印刷速度 [m^2/h]

    v_sub ≈ (fire_freq × nozzle_rows) / (dpi_sub × passes)
    A = v_sub × print_width
    """
    fire_hz = fire_khz * 1000
    dpm = dpi_to_dpm(dpi_sub)

    v_sub = (fire_hz * nozzle_rows) / (dpm * passes)  # m/s
    return v_sub * print_width_m * 3600


def ink_usage_ml_per_m2(
    dpi_x: float,
    dpi_y: float,
    drops_per_pixel: float,
    colors: int,
    drop_pl: float,
) -> float:
    """
    単位面積あたりインク量 [mL/m^2]
    """
    dpm_x = dpi_to_dpm(dpi_x)
    dpm_y = dpi_to_dpm(dpi_y)

    pixels = dpm_x * dpm_y
    drops = pixels * drops_per_pixel * colors

    return drops * drop_pl * 1e-9  # pL → mL


def grain_index(drops_per_pixel: float) -> float:
    """
    粒状性の簡易指標（小さいほど滑らか）
    """
    return 1.0 / (drops_per_pixel ** 0.5)
