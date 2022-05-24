import { SendEmail } from "./Nodemailerdemo.js";

describe("interaction with web element", function () {
  it("enter the value in the field", async () => {
    console.log("Entering Bozu US");

    let meetingsuccess = true;

    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
    //await browser.waitForDisplayed({timeout:5000});
    await browser.pause(5000);

    let JoinEvent = await $(
      "//button[@class='btn btn-theme-select mt-2 mb-2']"
    );
    //await JoinEvent.waitForDisplayed({ timeout: 20000 });
    await JoinEvent.click();
    // await JoinEvent.waitForDisplayed({timeout:10000});
    console.log(await browser.getUrl());
    if ((await browser.getUrl()) == "https://bozu.us/joinevent") {
      console.log("Successfully redirect on Join Demo Meeting page");
    } else {
      meetingsuccess = false;
      console.log("Failed to redirect on Join Demo Meeting page");
    }

    let JoinDemoMeeting = await $("div[class='col-12 mt-4 text-center mb-3']");
    if (await JoinDemoMeeting.isClickable()) {
      await JoinDemoMeeting.click();
    } else {
      meetingsuccess = false;
    }

    let Enteryourname = await $("input[placeholder='Enter your name ']");
    await Enteryourname.waitForDisplayed({ timeout: 10000 });
    await Enteryourname.addValue("nirali");
    await Enteryourname.waitForDisplayed({ timeout: 5000 });
    //await browser.pause(5000);

    let JoinDemoMeetingNow = await $(
      "div[class='col-lg-12 col-md-12 col-12 text-center mb-4']"
    );
    await JoinDemoMeetingNow.waitForDisplayed({timeout:5000});
    await JoinDemoMeetingNow.click();
    // await JoinDemoMeetingNow.waitForDisplayed({timeout:3000});
    //await browser.pause(3000);
    if (
      (await $(
        "div[class='col-lg-12 col-md-12 col-12 text-center mt-4 mb-3']"
      ).getText()) == "Welcome to Demo Event"
    ) {
      console.log("Entered in to Welcome to Demo Event page");
    } else {
      meetingsuccess = false;
      console.log("Failed to get Welcome to Demo Event text");
    }
    // let DontJoin = await $("//button[@class='btn btn-lg btn-danger-outline ng-star-inserted']");
    // await DontJoin.waitForDisplayed({ timeout:3000});
    // await DontJoin.click();
    // await browser.pause(3000);
    let JoinEventNow = await $(
      "//button[@class='btn btn-lg btn-green-select ml-3']"
    );
    await JoinEventNow.isClickable();
    await JoinEventNow.click();
    await JoinEventNow.waitForDisplayed({ timeout: 6000 });
    //await browser.pause(6000);
    if (
      (await $(
        "(//button[@class='btn btn-theme-select mb-lg-2'])[1]"
      ).getText()) == "Okay"
    ) {
      console.log(
        "Clicked on JoinEventNow button also OKAY button pop up is visible"
      );
    } else {
      meetingsuccess = false;
      console.log(
        "Unclicked on JoinEventNow button also OKAY button pop up is Invisible"
      );
    }

    let Okay = await $("//button[@class='btn btn-theme-select mb-lg-2']");
    await Okay.click();
    //await Okay.waitForDisplayed({timeout:5000});

    if (
      (await $(
        "div[class='d-flex title-abs-center align-items-center ng-star-inserted']"
      ).getText()) == "Demo Event"
    ) {
      console.log("Entered in to DemoEvent page");
    } else {
      meetingsuccess = false;
      console.log("Failed to get DemoEvent text");
    }

    let Cancel = await $(
      "//a[@class='text-first ml-auto d-flex align-item-baseline a-no-underline']"
    );
    if (await Cancel.isDisplayed()) {
      await Cancel.click();
      //await Cancel.waitForDisplayed({timeout:10000});
      //await browser.pause(150000);
    }

    for (let i = 1; i <= 20; i++) {
      let bozuStory = await $(
        "//div[contains(text(),'BOZU STORY')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']"
      );
      await bozuStory.waitForDisplayed({ timeout: 10000 });
      await bozuStory.click();

      let joinGroup = await $("//label[@class='ml-2']");
      //await JoinGroup.waitForDisplayed({ timeout: 10000 });
      await joinGroup.click();
      await browser.pause(5000);
      // let groupname = $(
      //   "div[class='profile-initials-container ng-star-inserted']"
      // ).getText(); //check
      // if (await JoinGroup.isClickable()) {
      //await JoinGroup.click();
      //   if ((await groupname) == "nirali") {
      //     console.log("Successfully entered into BOZU STORY Group");
      //   } else {
      //     console.log("Unable to entered into BOZU STORY Group");
      //   }
      // } else {
      //   meetingsuccess = false;
      // }

       let bozuTechTalk = await $$("//*[.=' more_horiz ']");
       await bozuTechTalk[1].waitForClickable({ timeout: 15000 });
       await bozuTechTalk[1].click();

     let joinGroupright = await $$("//label[.='Join Group']");
     console.log(await joinGroupright.length)
       //await joinGroupright.isDisplayed();
      // console.log("%%%%%%%%%%%%%%%%%%");
       console.log(await joinGroupright[0].isDisplayed());
       await joinGroupright[0].waitForDisplayed({ timeout: 10000 });
       await joinGroupright[0].waitForClickable({ timeout: 10000 });
      await joinGroupright[0].click();
       await browser.pause(5000);
    }
  });
});
