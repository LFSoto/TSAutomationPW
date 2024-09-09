import { test, expect } from '@playwright/test';



test.describe('prueba prueba', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/');
  })

  
  test('test 1', async ({ page }) => {
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('gatitos');
    await page.keyboard.press('Enter');
    await page.locator('.sPlQxd').click();
  })
  
})
