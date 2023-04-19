# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Set the environment variable for the app
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
