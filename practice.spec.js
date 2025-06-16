const { test, expect, chromium } = require('@playwright/test');

test('Basic Authentication test', async () => {
    // Launch the browser
    const browser = await chromium.launch();
    
    // Create a new browser context with HTTP credentials
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin',
        }
    });
    
    // Create a new page from the context
    const page = await context.newPage();
    
    // Navigate to the authenticated page
    await page.goto('https://practice.expandtesting.com/basic-auth');
    
    // Wait for some time to observe the result
    await page.waitForTimeout(3000);
    
    // Add your assertions here
    await expect(page).toHaveTitle('Basic Auth page for Automation Testing Practice');
    
    // Close the browser
    await browser.close();
});









