const{test,expect} = require('@playwright/test');
test('Simple Dialog', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Alert or Dialog:
    page.on('dialog',async AlertBox =>{

        expect(AlertBox.type()).toContain('alert');
        expect(AlertBox.message()).toContain('I am an alert box!')
        await AlertBox.accept();
    })
    //Trigger:
    await page.click('#alertBtn');
    await page.waitForTimeout(3000);
})

test('Confirm Dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async AlertBox=>{
        expect(AlertBox.type()).toContain('confirm');
        expect(AlertBox.message()).toContain('Press a button!');
        await AlertBox.dismiss();
    })
    //Trigger:
    await page.click('#confirmBtn');
    await page.waitForTimeout(3000);
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    await page.pause();
})

test.only('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Handle the dialog
    page.on('dialog', async dialog => {
        // Ensure the correct methods and syntax are used
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        
        await dialog.accept('Sangeetha'); // Accept the dialog with input value
    });
    
    // Trigger the prompt dialog
    await page.click('#promptBtn');
    
    await page.waitForTimeout(2000); // Optional: Wait for some time to observe the behavior
});

  
