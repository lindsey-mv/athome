// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');
const { writeToPath } = require('@fast-csv/format');

test('search for chairs', async ({ page }) => {
    await page.goto('https://athome.com/');
 
    await page.getByPlaceholder('What can we help you find?').fill('Norfolk White Tufted Accent Chair, Kd');
    await page.getByPlaceholder('What can we help you find?').press('Enter');

    await page.screenshot({ path: 'screenshot.png', fullPage: true });
  
    // find price  


    const rows = [
        ['athome', page.locator('.product-ab-price.active-price.sale-price > span.price-value').innerText()],
    ];
    writeToPath(path.resolve(__dirname, 'tmp.csv'), rows)
        .on('error', err => console.error(err))
        .on('finish', () => console.log('Done writing.'));


  });