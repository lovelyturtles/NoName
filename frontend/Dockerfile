FROM node:18
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

# Install frontend dependencies
RUN npm install --max-attempts=1000 --retry-delay=10000000 --verbose

# Copy frontend directory
COPY . .

# Expose the port this will run on
EXPOSE 3000

# Build the project
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
