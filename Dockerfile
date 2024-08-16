# Build 
FROM node:18-alpine AS build
WORKDIR /build
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Run
FROM node:18-alpine
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist ./dist
EXPOSE 9000
CMD ["npm", "run", "start:production"]