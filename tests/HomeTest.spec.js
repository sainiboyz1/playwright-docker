import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('Homepage should display the correct header', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate('https://playwright.dev/');
  const text = await homePage.getHeaderText();
  expect(text).toContain('Playwright');
});
