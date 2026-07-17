# Strapi CMS — build + run in one stage for reliability.
# (vips is needed by sharp for Strapi's media processing.)
FROM node:22-alpine
RUN apk add --no-cache vips-dev build-base python3
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "start"]
