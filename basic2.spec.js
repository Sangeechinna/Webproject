// const{test,expect}=require('@playwright/test')

// test('Launch Fb',async({page})=>{
//     await page.goto('https://www.facebook.com/');
//     await page.locator('id=email')
//     await page.locator("//div[@id='passContainer]")
//     await page.locator("//button[@name='login']")
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('link', { name: 'Instagram Instagram https://' });
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('sangee_mk');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
});

// })
