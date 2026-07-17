# Strapi CMS — build + run in one stage for reliability.
# build-base + python3: required to compile better-sqlite3 (no musl prebuilds).
# Do NOT install vips-dev: a system libvips makes sharp try to compile from
# source (and fail); without it, sharp uses its own prebuilt binaries.
FROM node:22-alpine
RUN apk add --no-cache build-base python3
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
