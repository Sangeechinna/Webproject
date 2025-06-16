    
const{test,expect}=require('@playwright/test')

 test('Launch Fb',async ({page})=>{

   await page.goto('https://www.instagram.com/');

   await page.goto('https://www.facebook.com/');


  // Go back to Instagram
  await page.goBack();
 
  // Go forward to Facebook
  await page.goForward();
 
  // Reload the Facebook page
  await page.reload();
 
  // Wait for a timeout (e.g., wait for 3 seconds)
  await page.waitForTimeout(3000);
  

  // Close the page
  await page.close();
});
