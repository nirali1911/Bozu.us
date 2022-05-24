import demoeventPage from "../pageobjects/demoevent.page.js";
import homePage from "../pageobjects/home.page.js";
import joineventPage from "../pageobjects/joinevent.page.js";
import welcomeDemoEventPage from "../pageobjects/welcomeDemoEvent.page";

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
    await expect(joineventPage.joinDemoMeetingNow).toBeEnabled();

    await joineventPage.clickOnJoinDemoMeetingNow();
    await expect(welcomeDemoEventPage.welcomeDemoEventPageHeader).toHaveText("Welcome to Demo Event");

    //await welcomeDemoEventPage.clickOnselectAudioButton();
    //await welcomeDemoEventPage.clickOnselectVideoButton();

    await expect(demoeventPage.joinEventNow).toBeClickable();
    await demoeventPage.clickOnJoinEventNowButton();
    await expect(demoeventPage.okayPopup).toHaveText("Okay");

    await demoeventPage.clickOnOkButton();
    await expect(demoeventPage.demoEventHeader).toHaveText("Demo Event");

    await demoeventPage.clickOnCanelPopupIfDisplayed();
    await demoeventPage.clickOnBozuStory();

    await browser.waitUntil(async () => (await demoeventPage.bozuStoryPeers).length > 0);
    let listofBozuStoryPeers = await demoeventPage.bozuStoryPeers.map(async peer => {
      await browser.waitUntil(async () => await peer.getText() !== "")
      return await peer.getText();
    })
    expect(listofBozuStoryPeers).toContain("Atul");
    expect(listofBozuStoryPeers).toContain("Bhavika");

    await browser.waitUntil(async () => (await demoeventPage.bozuTechStoryPeers).length > 0);
    let listofBozuTechStoryPeers = await demoeventPage.bozuTechStoryPeers.map(async peer => {
      await browser.waitUntil(async () => await peer.getText() !== "")
      return await peer.getText()
    })
    expect(listofBozuTechStoryPeers).toContain("Jaydeep");
    expect(listofBozuTechStoryPeers).toContain("Unnati");

    await demoeventPage.aAudio.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.aAudio).toBeDisplayed();

    await demoeventPage.aVideo.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.aVideo).toBeDisplayed();

    await demoeventPage.bAudio.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.bAudio).toBeDisplayed();

    await demoeventPage.bVideo.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.bVideo).toBeDisplayed();

    await demoeventPage.jAudio.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.jAudio).toBeDisplayed();

    await demoeventPage.jVideo.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.jVideo).toBeDisplayed();

    await demoeventPage.uAudio.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.uAudio).toBeDisplayed();

    await demoeventPage.uVideo.waitForDisplayed({ timeout: 10000 });
    await expect(demoeventPage.uVideo).toBeDisplayed();

    await demoeventPage.joinGroup.waitForClickable({ timeout: 20000 });
    await expect(demoeventPage.joinGroup).toBeClickable();
    await demoeventPage.clickOnjoinGroup();

    await expect(demoeventPage.insertedPeer).toHaveText("Nirali");

    await expect(demoeventPage.audioButton).toBeExisting();
    await demoeventPage.clickOnaudioButton();
    await expect(demoeventPage.mute).toBeDisplayed();

    await expect(demoeventPage.videoButton).toBeExisting();
    await demoeventPage.clickOnvideoButton();
    await expect(demoeventPage.turnvideooff).toBeDisplayed();

    await expect(demoeventPage.sharescreenButton).toBeExisting();
    await demoeventPage.clickOnsharescreenButton();
    await expect(demoeventPage.sharescreenDeSelect).toBeDisplayed();

    await demoeventPage.clickOncancelButton();

    await browser.pause(2000);
  });

});
