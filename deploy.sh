#!/usr/bin/env bash
set -euo pipefail

echo "==> Installing dependencies..."
npm ci

echo "==> Building static site..."
npm run build

echo ""
echo "==> Build complete. Static output is in ./out/"
echo ""
echo "To deploy to AWS Amplify:"
echo "  1. Push this repo to GitHub."
echo "  2. In the AWS Amplify console, connect the GitHub repo."
echo "  3. Set the build command to: npm ci && npm run build"
echo "  4. Set the output directory to: out"
echo "  5. Deploy."
echo ""
echo "Alternatively, deploy manually with the AWS CLI:"
echo "  aws s3 sync ./out/ s3://your-bucket-name --delete"
