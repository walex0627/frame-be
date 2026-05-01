FROM oven/bun:latest

WORKDIR /usr/src/app

# Solo copiamos lo necesario para instalar primero
COPY package.json bun.lock ./
RUN bun install

# Copiamos el resto del proyecto
COPY . .

# Generamos el cliente para que Prisma no dé errores de tipos
RUN bunx prisma generate

EXPOSE 3000

CMD ["bun", "run", "start:dev"]