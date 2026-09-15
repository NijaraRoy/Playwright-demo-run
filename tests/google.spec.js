const {test, expect} = require('@playwright/test')

test('Verify the title of the Google homepage', async ({ page }) => {
    await page.goto("https://www.google.com/")
    const url = await page.url()
    console.log("The title of the page is: " + url)
    await expect(page).toHaveTitle("Google")
})