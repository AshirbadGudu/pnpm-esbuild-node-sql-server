# pnpm-esbuild-node-sql-server

## Init a `pnpm` project

```sh
pnpm init
```

## Install ESBuild as devDependencies

```sh
pnpm i -D esbuild
```

## Install typescript as devDependencies

```sh
pnpm i -D typescript
```

## Add esbuild-node-tsc & nodemon

```sh
pnpm install esbuild-node-tsc nodemon -D
```

## Create nodemon setup

```json
{
  "watch": ["server"],
  "ignore": ["server/**/*.test.ts", "node_modules"],
  "ext": "ts,mjs,js,json,graphql",
  "exec": "etsc && node ./build/index.js",
  "legacyWatch": true
}
```

## Add required scripts

```json
"scripts": {
    "init:tsc": "tsc --init",
    "server": "nodemon ./server/index.ts",
    "build": "etsc",
    "start": "node ./build",
    "studio": "prisma studio",
    "generate": "prisma generate",
    "db:push": "prisma db push",
 }
```

## Step - 6: Update tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./server",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Install prisma

```sh
pnpm install prisma --save-dev
```

## Install prisma

```sh
pnpm install prisma --save-dev
```

## Set up Prisma with mongodb

```sh
pnpx prisma init
```

## Install Prisma Client

```sh
pnpm install @prisma/client
```

## Install some basic packages & it's devDependencies

```sh
pnpm i express express-validator helmet dotenv bcryptjs cors nodemailer http-errors jsonwebtoken socket.io
pnpm i -D @types/express @types/bcryptjs @types/cors @types/nodemailer @types/http-errors @types/jsonwebtoken
```

## Push all the database schema

```sh
pnpx prisma db push
```

## Generate database schema

```sh
pnpx prisma generate
```

## Create proper folder structure

```sh
mkdir -p server/{configs,controllers,middlewares,plugins,routes,services,types,validations}
```

## Create `index.ts` in all folders

```sh
cd server
echo "export {};" >> "index.ts"
for dir in *; do [ -d "$dir" ] && echo "export {};" >> "$dir/index.ts" ; done
```
