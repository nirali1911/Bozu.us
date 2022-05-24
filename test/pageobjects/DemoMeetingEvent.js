 import demoeventPage from "../pageobjects/demoevent.page.js";
 import homePage from "../pageobjects/home.page.js";
 import joineventPage from "../pageobjects/joinevent.page.js";

describe("interaction with web element", function () {

  beforeEach(async () => {
    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
  })

  it("should validate join event button", async () => {
    await homePage.joinEvent.waitForDisplayed({timeout: 20000})
    await expect(homePage.joinEvent).toBeEnabled();
    await expect(homePage.joinEvent).toHaveText("Join Event Now");
  })

  it("should validate joining event and demo", async () => {
    await homePage.clickOnJoinEvent();
    
    await joineventPage.clickOnJoinDemoMeeting();
    await joineventPage.setUser("Nirali");
    await joineventPage.clickOnJoinDemoMeetingNow();

    await demoeventPage.clickOnJoinEventNowButton();
    await demoeventPage.clickOnOkButton();
    await demoeventPage.clickOnCanelIfDisplayed();
    await demoeventPage.clickOnBozuStory();

    let JoinGroup = await $("//label[@class='ml-2']");
    await JoinGroup.waitForDisplayed({ timeout: 10000 });
    await JoinGroup.click();

    let audio = await $('#Icon_awesome-microphone-alt-slash');
    await audio.waitForClickable({ timeout: 100000 })
    await audio.click();

    let video = await $('#Icon_awesome-video-slash');
    await video.waitForClickable({ timeout: 100000 });
    await video.click();
    await browser.pause(20000);
  });

});