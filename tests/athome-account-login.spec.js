// @ts-check
const { test, expect } = require('@playwright/test');

test('Account link', async ({ page }) => {
    await page.goto('https://athome.com/');
  
    // Click the Account link.
    await page.getByRole('link', { name: 'Account' }).click();
  
    // Expects the URL to contain intro.
    // await expect(page).toHaveURL(/.*intro/);
    await expect(page.getByText('Insider Perks Account Sign In').first()).toBeVisible();
  });