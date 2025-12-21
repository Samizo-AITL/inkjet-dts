# render.py
import numpy as np
import matplotlib.pyplot as plt


def render_print_png(
    filename: str,
    dpi: int,
    drops_per_pixel: float,
    dot_radius_px: int = 1,
    size_px: int = 512,
    seed: int = 0,
):
    """
    印字画質の疑似レンダリング（教材用）

    - dpi              : 解像度（影響は相対的）
    - drops_per_pixel  : 多いほど滑らか
    - dot_radius_px    : ドット半径（画素）
    - size_px          : 出力画像サイズ
    """
    rng = np.random.default_rng(seed)
    img = np.ones((size_px, size_px))

    # ドット数は drops_per_pixel に比例
    n_dots = int(size_px * size_px * 0.01 * drops_per_pixel)

    for _ in range(n_dots):
        x = rng.integers(0, size_px)
        y = rng.integers(0, size_px)

        rr, cc = np.ogrid[:size_px, :size_px]
        mask = (rr - y) ** 2 + (cc - x) ** 2 <= dot_radius_px ** 2
        img[mask] = 0.0

    plt.figure(figsize=(4, 4))
    plt.imshow(img, cmap="gray", vmin=0, vmax=1)
    plt.axis("off")
    plt.tight_layout()
    plt.savefig(filename, dpi=200)
    plt.close()
