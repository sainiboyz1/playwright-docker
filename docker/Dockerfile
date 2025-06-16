# Use the official Playwright base image
FROM mcr.microsoft.com/playwright:focal

# Set working directory
WORKDIR /app

# Copy project files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Ensure test-results directory exists and is writable
RUN mkdir -p /app/test-results && chmod -R 777 /app/test-results

# Run tests by default
CMD ["npx", "playwright", "test"]





