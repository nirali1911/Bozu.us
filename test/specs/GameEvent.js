import romudashboardPage from "../pageobjects/romudashboard.page.js";
import romuloginpage from "../pageobjects/romulogin.page.js";


describe("Game Event", function () {

    before("Open app", async () => {

        await browser.url("https://romu.us:29998/home");
        await browser.maximizeWindow();
    })

    it("should validate login button", async () => {
        await expect(romuloginpage.loginButton).toBeDisplayed();
        await romuloginpage.clickOnloginButton();

        await (romuloginpage.emailEnterField).setValue("niraliwdv@gmail.com");
        await (romuloginpage.passwordEnterField).setValue("Mypassword55#");

        await expect(romuloginpage.login).toBeDisplayed();
        await romuloginpage.clickOnlogin();

    })
    it("should validate bozuGaming button", async () => {
        await expect(romudashboardPage.bozuGaming).toBeDisplayed();
        await romudashboardPage.clickOnbozuGaming();
    })
});

