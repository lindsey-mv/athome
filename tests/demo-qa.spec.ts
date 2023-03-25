import { test, expect } from '@playwright/test';

test('DemoQA - testing text box', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
 
  await page.getByPlaceholder('Full Name').fill('emily mitchel');
  await page.getByPlaceholder('name@example.com').fill('emilymitch@littletush.com');
  await page.getByPlaceholder('Current Address').fill('123 boulevard');
  await page.getByPlaceholder('Current Address').press('Tab');
  await page.locator('#permanentAddress').fill('321 permanent');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Name:emily mitchel')).toBeVisible();
  await expect(page.getByText('Email:emilymitch@littletush.com')).toBeVisible();
  await expect(page.getByText('Current Address :123 boulevard')).toBeVisible();
  await expect(page.getByText('Permananet Address :321 permanent')).toBeVisible();

});

test('DemoQA - testing check box', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.getByRole('heading', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  await page.getByRole('button', { name: 'Expand all' }).click();
  await page.locator('label').filter({ hasText: 'Office' }).locator('svg').first().click();

  await expect(page.getByText('You have selected :')).toBeVisible();
  await expect(page.getByText('office', { exact: true })).toBeVisible();
  await expect(page.getByText('public', { exact: true })).toBeVisible();
  await expect(page.getByText('private', { exact: true })).toBeVisible();
  await expect(page.getByText('classified', { exact: true })).toBeVisible();
  await expect(page.getByText('general', { exact: true })).toBeVisible();
});
