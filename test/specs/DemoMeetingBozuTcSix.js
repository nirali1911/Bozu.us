import { SendEmail } from "./Nodemailerdemo.js";

describe("interaction with web element", function () {
  it("enter the value in the field", async () => {
    console.log("Entering Bozu US");

    let meetingsuccess = true;

    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
    await browser.pause(5000);

    let JoinEvent = await $("//button[@class='btn btn-theme-select mt-2 mb-2']");
    await JoinEvent.waitForDisplayed({ timeout: 20000 });
    await JoinEvent.click();

    // console.log(await browser.getUrl());
    // if ((await browser.getUrl()) == "https://bozu.us/joinevent") {
    //   console.log("Successfully redirect on Join Demo Meeting page");
    // } else {
    //   meetingsuccess = false;
    //   console.log("Failed to redirect on Join Demo Meeting page");
    // }

    let JoinDemoMeeting = await $("div[class='col-12 mt-4 text-center mb-3']");
    //if (await JoinDemoMeeting.isClickable()) {
      await JoinDemoMeeting.click();
   // } else {
     // meetingsuccess = false;
    //}

    let Enteryourname = await $("input[placeholder='Enter your name ']");
    await Enteryourname.waitForDisplayed({ timeout: 10000 });
    await Enteryourname.addValue("nirali");
    
    let JoinDemoMeetingNow = await $(
      "div[class='col-lg-12 col-md-12 col-12 text-center mb-4']");
    await JoinDemoMeetingNow.click();
    // if (
    //   (await $("div[class='col-lg-12 col-md-12 col-12 text-center mt-4 mb-3']").getText()) == "Welcome to Demo Event") {
    //   console.log("Entered in to Welcome to Demo Event page");
    // } else {
    //   meetingsuccess = false;
    //   console.log("Failed to get Welcome to Demo Event text");
    // }
    let JoinEventNow = await $("//button[@class='btn btn-lg btn-green-select ml-3']");
    await JoinEventNow.waitForDisplayed({ timeout: 5000 });
    await JoinEventNow.isClickable();
    await JoinEventNow.click();
    // if (
    //   (await $(
    //     "(//button[@class='btn btn-theme-select mb-lg-2'])[1]"
    //   ).getText()) == "Okay"
    // ) {
    //   console.log(
    //     "Clicked on JoinEventNow button also OKAY button pop up is visible"
    //   );
    // } else {
    //   meetingsuccess = false;
    //   console.log(
    //     "Unclicked on JoinEventNow button also OKAY button pop up is Invisible"
    //   );
    // }

    let Okay = await $("//button[@class='btn btn-theme-select mb-lg-2']");
    await Okay.click();
    // if (
    //   (await $(
    //     "div[class='d-flex title-abs-center align-items-center ng-star-inserted']"
    //   ).getText()) == "Demo Event"
    // ) {
    //   console.log("Entered in to DemoEvent page");
    // } else {
    //   meetingsuccess = false;
    //   console.log("Failed to get DemoEvent text");
    // }

    let Cancel = await $(
      "//a[@class='text-first ml-auto d-flex align-item-baseline a-no-underline']"
    );
    if (await Cancel.isDisplayed()) {
      await Cancel.click();
    }
    await browser.pause(5000);

    let aAudio = $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Atul']/parent::div/following-sibling::div//mat-icon[text()=' mic']");
    await aAudio.waitForDisplayed({timeout: 10000});
    if(await aAudio.isDisplayed()){
        console.log("A AUDIO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("A AUDIO FAIL");
    }

    let aVideo = $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Atul']/parent::div/following-sibling::div//mat-icon[text()='videocam']");
    await aVideo.waitForDisplayed({timeout: 10000});
    if(await aVideo.isDisplayed()){
        console.log("A VIDEO PASS");

    }
    else{
        meetingsuccess = false;
        console.log("A VIDEO FAIL");
    }

    
    let bAudio = $("`//div[contains(text(),'BOZU STORY')]/../../.`.//label[contains(@class, 'peer-name') and text()='Bhavika']/parent::div/following-sibling::div//mat-icon[text()=' mic']");
    await bAudio.waitForDisplayed({timeout: 10000});
    if(await bAudio.isDisplayed()){
        console.log("B AUDIO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("B AUDIO FAIL");
    }

    let bVideo = $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Bhavika']/parent::div/following-sibling::div//mat-icon[text()='videocam']");
    await bVideo.waitForDisplayed({timeout: 10000});
    if(await bVideo.isDisplayed()){
        console.log("B VIDEO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("B VIDEO FAIL");
    }

    let jAudio = $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Jaydeep']/parent::div/following-sibling::div//mat-icon[text()=' mic']");
    await jAudio.waitForDisplayed({timeout: 10000});
    if(await jAudio.isDisplayed()){
        console.log("J AUDIO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("J AUDIO FAIL");
    }


    let jVideo = $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Jaydeep']/parent::div/following-sibling::div//mat-icon[text()='videocam']");
    await jVideo.waitForDisplayed({timeout: 10000});
    if(await jVideo.isDisplayed()){
        console.log("J VIDEO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("J VIDEO FAIL");
    }

    
    let uAudio = $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Unnati']/parent::div/following-sibling::div//mat-icon[text()=' mic']");
    await uAudio.waitForDisplayed({timeout: 10000});
    if(await uAudio.isDisplayed()){
        console.log("U AUDIO PASS");

    }
    else{
        meetingsuccess = false;
        console.log("U AUDIO FAIL");
    }

    let uVideo = $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Unnati']/parent::div/following-sibling::div//mat-icon[text()='videocam']");
    await uVideo.waitForDisplayed({timeout: 10000});
    if(await uVideo.isDisplayed()){
        console.log("U VIDEO PASS");
    }
    else{
        meetingsuccess = false;
        console.log("U VIDEO FAIL");
    }

    if (meetingsuccess) {
      await SendEmail(
        "<b>Demo Meeting Working Fine</b>",
        "Demo Meeting Working Fine"
      );
    } else {
      await SendEmail(
        "<b>Demo Meeting Isn't working</b>",
        "Demo Meeting Isn't working"
      );
    }
  });
});
