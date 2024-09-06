# Stage 1: Build Stage
FROM node:20-alpine3.20 AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files and build the application
COPY . .
RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine3.20 AS production

# Create app directory
WORKDIR /app

# Copy only the build artifacts and necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm install --only=production

# Run the application
CMD ["node", "./dist/main.js"]