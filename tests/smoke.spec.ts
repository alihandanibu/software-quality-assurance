import { test, expect } from '@playwright/test';

test('@smoke the login page opens', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Swag Labs');
});