#!/usr/bin/env bash
# Render flyer.html to dist/flyer-A4.pdf (print) and dist/flyer.png (social media)
# with headless Chrome. Fonts load from Google Fonts, so this needs a network.
set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT
mkdir -p dist

"$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" \
  --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="dist/flyer-A4.pdf" "file://$PWD/flyer.html"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" \
  --window-size=794,1123 --force-device-scale-factor=2 --virtual-time-budget=15000 \
  --screenshot="dist/flyer.png" "file://$PWD/flyer.html"
