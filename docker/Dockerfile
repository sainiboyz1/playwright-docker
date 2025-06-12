# Use official Playwright image with all dependencies installed
FROM mcr.microsoft.com/playwright:v1.53.0-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Ensure test results folder exists and is writable
RUN mkdir -p /app/test-results && chmod -R 777 /app/test-results

# Install Allure and Playwright dependencies
RUN npm i -D @playwright/test allure-playwright allure-commandline

# Install Playwright browsers
RUN npx playwright install

# Run Playwright tests with Allure reporter
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]

USER root


