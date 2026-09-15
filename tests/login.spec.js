const {test, expect} = require('@playwright/test')

test.use({ viewport: { width: 1263, height: 716 } });

test("Valid login test", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const viewportHeight = await page.viewportSize().height
    const viewportWidth = await page.viewportSize().width
    console.log(`Viewport height: ${viewportHeight}, Viewport width: ${viewportWidth}`)
    await page.getByPlaceholder("Username").fill("Admin", {delay: 1000})
    await page.locator('input[name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)
})
