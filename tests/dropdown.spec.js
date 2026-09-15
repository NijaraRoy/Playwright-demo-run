const {test, expect} = require('@playwright/test')

test("Select values from the dropdown", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label: "Assam"})
    //await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({label: "Andhra Pradesh"})
    //await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({index:4})
    //await page.waitForTimeout(2000)

    // const dropdownValues = await page.locator("#state").textContent()
    // console.log("All dropdown values: " + dropdownValues)
    // await expect(dropdownValues.includes("Assam")).toBeTruthy()

    let ddStatus = false

    let state = await page.$("#state")
    let allElem = await state.$$("option")
    for(let i=0;i<allElem.length;i++){
        let text = await allElem[i].textContent()
        if (text.includes("Assam")){ 
            console.log("Assam is present in the dropdown")
            ddStatus = true
            break
        }
    }
    await expect(ddStatus).toBeTruthy()

    // multi options

    await page.locator("#hobbies").selectOption(["Reading" ,"Dancing"])
    await page.waitForTimeout(2000)

})