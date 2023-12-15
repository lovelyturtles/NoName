# FROM node:18
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./

# # Install frontend dependencies
# RUN npm install

# # Copy frontend directory
# COPY . .

# # Expose the port this will run on
# EXPOSE 3000

# # Build the project
# RUN npm run build

# # Start the application
# CMD ["npm", "run", "start"]

FROM node:18-slim
WORKDIR /app

# Copy package.json to the container
COPY package.json ./

# Install frontend dependencies using Yarn
RUN yarn install --network-timeout 1000000

# Copy the entire project to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Build the project using Yarn
RUN yarn build

# Start the application using Yarn
CMD ["yarn", "start"]
