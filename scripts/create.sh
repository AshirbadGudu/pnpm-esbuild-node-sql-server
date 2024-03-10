echo "🔥 Creating files "
touch ./server/functions/$1.functions.ts
echo "🔥 File '$1.functions.ts' created successfully!"
touch ./server/controllers/$1.controller.ts
echo "🔥 File '$1.controllers.ts' created successfully!"
touch ./server/validations/$1.validations.ts
echo "🔥 File '$1.validations.ts' created successfully!"
touch ./server/routes/$1.routes.ts
echo "🔥 File '$1.routes.ts' created successfully!"
echo "All Files created 🔥"

