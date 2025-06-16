# Use the official Playwright base image
FROM mcr.microsoft.com/playwright:focal

# Set working directory
WORKDIR /app


# Install dependencies
RUN npm install


# Copy project files
COPY package*.json ./
COPY . .

# Ensure test-results directory exists and is writable
RUN mkdir -p /app/test-results && chmod -R 777 /app/test-results

# Run tests by default
CMD ["npx", "playwright", "test"]





