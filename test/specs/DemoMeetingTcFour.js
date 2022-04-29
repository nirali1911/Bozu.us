//import { SendEmail } from "./Nodemailerdemo.js";
//import peerone from "../data/peerone.json"

describe("interaction with web element", function () {
  it("enter the value in the field", async () => {
    console.log("Entering Bozu US");

    //let meetingsuccess = true;

    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
    await browser.pause(5000);

    let JoinEvent = await $(
      "//button[@class='btn btn-theme-select mt-2 mb-2']"
    );
    await JoinEvent.waitForDisplayed({ timeout: 10000 });
    await JoinEvent.click();
    //await browser.pause(10000);

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
    //} else {
    //  meetingsuccess = false;
   // }

    let Enteryourname = await $("input[placeholder='Enter your name ']");
    await Enteryourname.waitForDisplayed({ timeout: 15000 });
    await Enteryourname.addValue("nirali");
    //await browser.pause(5000);

    let JoinDemoMeetingNow = await $(
      "div[class='col-lg-12 col-md-12 col-12 text-center mb-4']"
    );
    await JoinDemoMeetingNow.click();
    await browser.pause(5000);
    // if (
    //   (await $(
    //     "div[class='col-lg-12 col-md-12 col-12 text-center mt-4 mb-3']"
    //   ).getText()) == "Welcome to Demo Event"
    // ) {
    //   console.log("Entered in to Welcome to Demo Event page");
    // } else {
    //   meetingsuccess = false;
    //   console.log("Failed to get Welcome to Demo Event text");
    // }

    let DontJoin = await $("//button[@class='btn btn-lg btn-danger-outline ng-star-inserted']");
    await DontJoin.waitForDisplayed({ timeout:10000});
    await DontJoin.click();
    await browser.pause(10000);
});
});
