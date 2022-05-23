import homePage from "../pageobjects/home.page.js";
import joineventPage from "../pageobjects/joinevent.page.js";
import wecomeDemoEventPage from "../pageobjects/welcomeDemoEvent.page";

describe("Demo Meeting", function () {

  before("Open app", async () => {

    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
  })

  it("should validate join event now button", async () => {
    await homePage.joinEventNow.waitForDisplayed({ timeout: 20000 })
    await expect(homePage.joinEventNow).toBeEnabled();
    await expect(homePage.joinEventNow).toHaveText("Join Event Now");
  })

  it("should validate join event now page navigation", async () => {
    await homePage.clickOnJoinEventNow();
    await expect(browser).toHaveUrl("https://bozu.us/joinevent");
  })
  it("should validate joining event and demo", async () => {

    await joineventPage.clickOnJoinDemoMeeting();

    await joineventPage.setUser("Nirali");
    
    await joineventPage.clickOnJoinDemoMeetingNow();
    
})
 it("should validate Don't Join Button", async () => {

  await wecomeDemoEventPage.clickOndontJoinButton();
  await expect(browser).toHaveUrl("https://bozu.us/home");
  

 });


});

