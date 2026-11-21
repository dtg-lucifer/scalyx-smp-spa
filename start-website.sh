#!/bin/bash
# Scalyx SMP Website Runner
cd "$(dirname "$0")"

echo "=== Scalyx SMP Official Website ==="
echo "Building / Serving on port 3000..."

npm run preview -- --port 3000 --host 0.0.0.0
