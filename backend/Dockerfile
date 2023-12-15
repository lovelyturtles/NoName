FROM node:18
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install backend dependencies using Yarn
RUN yarn install --network-timeout 1000000

# Copy the entire project to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# Run postinstall using Yarn
RUN yarn run postinstall

# Build the project using Yarn
RUN yarn build

# Start the application using Yarn
CMD ["yarn", "start"]
