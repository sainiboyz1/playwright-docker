# Use official Playwright image with all dependencies installed
# Use official Playwright image (Linux-based but runs on Docker for Windows)
FROM mcr.microsoft.com/playwright:v1.53.0-jammy

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Install Allure and Playwright dependencies
RUN npm install --save-dev @playwright/test allure-playwright allure-commandline

# Install Playwright browsers
RUN npx playwright install

# Create test-results folder and give broad permissions (safe in CI/dev context)
RUN mkdir -p /app/test-results \
 && chmod -R 777 /app/test-results

# Set the user to root to avoid permission errors
USER root

# Use PowerShell-style compatible entrypoint for Windows
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]



