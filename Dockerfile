FROM node:20.8-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /src
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production
# Copy app files
COPY . .

# Expose port
# EXPOSE 3000

# Build the app
RUN npx next build

# Start the app 
# CMD ["npm", "run", "dev"]

# Bundle static assets with nginx
FROM nginx:1.25.2-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /src/out /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]