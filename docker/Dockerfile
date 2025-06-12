# Use official Playwright image with all dependencies installed
FROM mcr.microsoft.com/playwright:v1.53.0-jammy

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Run Playwright tests
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]

RUN npm i -D @playwright/test allure-playwright allure-commandline
RUN npx playwright install

