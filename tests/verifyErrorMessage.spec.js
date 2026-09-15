const {test, expect} = require('@playwright/test')

test("Verify error messagefor invalid login", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admn12344")
    await page.getByRole('button', { name: 'Login' }).click()
    // await page.locator('button:has-text("Login")')
    const errorMessage = await page.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text').textContent()
    console.log(errorMessage)
    expect(errorMessage.includes("Invalid credentials")).toBeTruthy()
    expect(errorMessage).toBe("Invalid credentials")   

})