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
echo "// GET route" >> "$routes_file"
echo "router.get(\"/\", (_, res) => {" >> "$routes_file"
echo "  res.json({ message: \"GET request successful 🔥\" });" >> "$routes_file"
echo "});" >> "$routes_file"
echo "" >> "$routes_file"
echo "// POST route" >> "$routes_file"
echo "router.post(\"/\", (req, res) => {" >> "$routes_file"
echo "  const data = req.body;" >> "$routes_file"
echo "  res.json({ message: \"POST request successful 🔥\", data });" >> "$routes_file"
echo "});" >> "$routes_file"
echo "" >> "$routes_file"
echo "// PUT route" >> "$routes_file"
echo "router.put(\"/:id\", (req, res) => {" >> "$routes_file"
echo "  const id = req.params.id;" >> "$routes_file"
echo "  const data = req.body;" >> "$routes_file"
echo "  res.json({ message: \`PUT request successful for ID \${id} 🔥\`, data });" >> "$routes_file"
echo "});" >> "$routes_file"
echo "" >> "$routes_file"
echo "// DELETE route" >> "$routes_file"
echo "router.delete(\"/:id\", (req, res) => {" >> "$routes_file"
echo "  const id = req.params.id;" >> "$routes_file"
echo "  res.json({ message: \`DELETE request successful for ID \${id} 🔥\` });" >> "$routes_file"
echo "});" >> "$routes_file"

echo "All Files created 🔥"
