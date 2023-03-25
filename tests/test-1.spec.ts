/*

npx playwright test tests/test-1.spec.ts --debug
*/




import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.athome.com/');
  await page.getByRole('navigation', { name: 'Main Navigation' }).getByRole('link', { name: 'Rugs & Curtains', exact: true }).click();
  await page.getByRole('link', { name: 'Curtains Curtains' }).click();
  await page.getByRole('link', { name: 'Sheer Curtains Sheer Curtains' }).click();
  await page.getByRole('link', { name: 'Erica Rod Pocket Sheer Curtain Panel, 84", 4.7 out of 5 stars, More Colors, In stock, $7.99' }).click();

  await expect(page.locator('div').filter({ hasText: '$7.99' }).nth(1)).toBeVisible();
  

});