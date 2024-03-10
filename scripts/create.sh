#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

filename=$1

# Create functions file
echo "🔥 Creating files "
touch "./server/functions/$filename.functions.ts"
echo "🔥 File '$filename.functions.ts' created successfully!"

# Create controller file
touch "./server/controllers/$filename.controller.ts"
echo "🔥 File '$filename.controller.ts' created successfully!"

# Create validations file
touch "./server/validations/$filename.validations.ts"
echo "🔥 File '$filename.validations.ts' created successfully!"

# Create routes file with specific content
routes_file="./server/routes/$filename.routes.ts"
touch "$routes_file"
echo "🔥 File '$routes_file' created successfully!"

# Add content to routes file
echo "import { Router } from \"express\";" > "$routes_file"
echo "" >> "$routes_file"
echo "export const router = Router();" >> "$routes_file"
echo "" >> "$routes_file"
echo "router.get(\"/\", (_, res) => {" >> "$routes_file"
echo "  res.json({ fire: \`🔥🔥🔥\` });" >> "$routes_file"
echo "});" >> "$routes_file"

echo "All Files created 🔥"
