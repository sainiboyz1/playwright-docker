# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.53.0-noble

# Set working directory inside container
WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy all project files into container
COPY . .

# Create test-results folder with proper permissions
# RUN mkdir -p /app/test-results && chmod -R 777 /app/test-results
RUN mkdir -p /tmp/test-results && chmod -R 777 /tmp/test-results


# Default command to run tests
CMD ["npx", "playwright", "test"]

# REMOVE if error occurs
RUN npm i -D @playwright/test allure-playwright allure-commandline
RUN npx playwright install






