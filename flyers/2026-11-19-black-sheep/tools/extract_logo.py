# /// script
# requires-python = ">=3.10"
# dependencies = ["numpy", "pillow", "scipy"]
# ///
"""Cut the ram head and the "THE BLACK SHEEP" lettering out of the venue logo.

The logo is a 2046x2046 black-on-white PNG: a ram drawn over a diamond frame,
"THE" in white on the ram's chest and the arched "BLACK SHEEP" wordmark below.
Both cutouts are written as single-colour ink on a transparent background, so
the white parts of the drawing let the flyer's orange band show through.

Usage: uv run tools/extract_logo.py black-sheep.png black-sheep/
"""

import sys

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

INK = (13, 14, 8)  # #0D0E08, the band's text colour

# The diamond frame is two 45° lines per edge (thin outer, thick inner).
# Upper-left edge: x + y in this range. Upper-right edge: x - y in this range.
BAND_L = (1040, 1178)
BAND_R = (912, 1049)

# Where the frame lines touch the ram, erase only the side outside its outline.
ABOVE_HORN = [(860, 0), (1320, 0), (1320, 150), (1280, 141), (1240, 126), (1200, 116), (1180, 111),
              (1160, 106), (1140, 101), (1110, 96), (1080, 94), (1040, 93), (1000, 94), (980, 96),
              (960, 99), (940, 104), (920, 110), (900, 117), (880, 127), (860, 139)]
LEFT_OF_HORN = [(500, 260), (724, 260), (718, 280), (711, 300), (703, 320), (699, 340), (697, 360),
                (695, 380), (694, 400), (693, 430), (693, 460), (692, 490), (690, 515), (688, 530),
                (684, 560), (670, 590), (640, 620), (600, 650), (500, 650)]
RIGHT_OF_NOSE = [(1849, 796), (1838, 812), (1826, 828), (1812, 844), (1800, 858), (1792, 872),
                 (1786, 890), (1782, 910), (2046, 910), (2046, 796)]

HEAD_BOX = (520, 88, 1872, 906)    # horn top to just above "THE"
THE_BOX = (880, 950, 1180, 1085)   # fully black around the white letters
WORD_ROWS = (1150, 1620)           # rows holding the arched wordmark
THE_GAP = 34                       # px between "THE" and "BLACK SHEEP"


def polygon(points, size):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).polygon(points, fill=255)
    return np.array(mask) > 0


def to_rgba(alpha):
    rgba = np.zeros(alpha.shape + (4,), np.uint8)
    rgba[..., :3] = INK
    rgba[..., 3] = alpha
    return Image.fromarray(rgba, "RGBA")


def head(gray):
    h, w = gray.shape
    alpha = 255 - gray
    yy, xx = np.mgrid[0:h, 0:w]
    band_l = (xx + yy >= BAND_L[0]) & (xx + yy <= BAND_L[1])
    band_r = (xx - yy >= BAND_R[0]) & (xx - yy <= BAND_R[1])
    above = polygon(ABOVE_HORN, (w, h))
    erase = ((above | polygon(LEFT_OF_HORN, (w, h))) & band_l) | ((above | polygon(RIGHT_OF_NOSE, (w, h))) & band_r)
    alpha[erase] = 0
    x0, y0, x1, y1 = HEAD_BOX
    alpha = alpha[y0:y1, x0:x1].astype(np.uint8)
    alpha = alpha[tuple(slice(a, b) for a, b in zip(*bbox(alpha)))]
    # Drop the few frame specks left at the crop edges.
    lab, _ = ndimage.label(alpha > 40, structure=np.ones((3, 3)))
    ah, aw = alpha.shape
    for i, (ys, xs) in enumerate(ndimage.find_objects(lab), start=1):
        near_edge = xs.start < 60 or ys.start < 20 or xs.stop > aw - 40
        if near_edge and (lab[ys, xs] == i).sum() < 80:
            alpha[lab == i] = 0
    return alpha


def wordmark(gray):
    # "THE" is white on the black chest: its letters are the light pixels.
    x0, y0, x1, y1 = THE_BOX
    the = gray[y0:y1, x0:x1].astype(np.uint8)
    the = the[tuple(slice(a, b) for a, b in zip(*bbox(the)))]

    # Each "BLACK SHEEP" letter is its own ink blob, clear of the ram and the ribbon.
    ink = gray < 128
    lab, n = ndimage.label(ink, structure=np.ones((3, 3)))
    keep = np.zeros(n + 1, bool)
    for i, (ys, xs) in enumerate(ndimage.find_objects(lab), start=1):
        keep[i] = ys.start >= WORD_ROWS[0] and ys.stop <= WORD_ROWS[1] and ys.stop - ys.start >= 250
    letters = ndimage.binary_dilation(keep[lab], iterations=2)
    word = np.where(letters, 255 - gray, 0)
    word[:WORD_ROWS[0]] = 0
    word[WORD_ROWS[1]:] = 0
    word = word.astype(np.uint8)
    word = word[tuple(slice(a, b) for a, b in zip(*bbox(word, threshold=8)))]

    out = np.zeros((the.shape[0] + THE_GAP + word.shape[0], word.shape[1]), np.uint8)
    tx = (word.shape[1] - the.shape[1]) // 2
    out[:the.shape[0], tx:tx + the.shape[1]] = the
    out[the.shape[0] + THE_GAP:] = word
    return out


def bbox(alpha, threshold=0):
    ys, xs = np.nonzero(alpha > threshold)
    return (ys.min(), xs.min()), (ys.max() + 1, xs.max() + 1)


def main(src, outdir):
    gray = np.array(Image.open(src).convert("L")).astype(np.int32)
    if gray.shape != (2046, 2046):
        sys.exit(f"expected the 2046x2046 logo, got {gray.shape[1]}x{gray.shape[0]}")
    to_rgba(head(gray.copy())).save(f"{outdir}/sheep-head.png", optimize=True)
    to_rgba(wordmark(gray)).save(f"{outdir}/wordmark.png", optimize=True)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__.strip().splitlines()[-1])
    main(sys.argv[1], sys.argv[2])
