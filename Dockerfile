# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire React project
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a lightweight Nginx server for serving the built app
FROM nginx:alpine

# COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Step 8: Copy the build output to Nginx HTML directory
COPY --from=builder /app/build /usr/share/nginx/html



# Step 9: Expose port 80 to allow external access
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
