FROM mcr.microsoft.com/playwright:v1.53.0-jammy

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Create test-results with correct ownership
RUN mkdir -p /app/test-results && chown -R pwuser:pwuser /app/test-results

# Install necessary test tools
RUN npm install --save-dev @playwright/test allure-playwright allure-commandline

# Install Playwright browsers
RUN npx playwright install

# Switch to the pwuser (default Playwright user with safer perms)
USER pwuser

# Run the tests
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]




