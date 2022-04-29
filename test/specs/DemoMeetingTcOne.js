import { SendEmail } from "./Nodemailerdemo.js";

describe("interaction with web element", function () {
  it("Validate Join Event Now button", async () => {
    console.log("Entering Bozu US");

    let meetingsuccess = true;

    await browser.url("https://bozu.us");
    await browser.maximizeWindow();
    await browser.pause(5000);

    let JoinEvent = await $(
      "//button[@class='btn btn-theme-select mt-2 mb-2']"
    );
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
    //} else {
    //meetingsuccess = false;
    //}

    let Enteryourname = await $("input[placeholder='Enter your name ']");
    await Enteryourname.waitForDisplayed({ timeout: 10000 });
    await Enteryourname.addValue("nirali");
    await Enteryourname.waitForDisplayed({ timeout: 5000 });

    //let JoinDemoMeetingNow = await $("div[class='col-lg-12 col-md-12 col-12 text-center mb-4']");
    let JoinDemoMeetingNow = await $("//button[@class='btn btn-theme-select mb-lg-2']");
    await JoinDemoMeetingNow.waitForDisplayed({ timeout: 10000 });
    await JoinDemoMeetingNow.click();

    if (
      (await $(
        "div[class='col-lg-12 col-md-12 col-12 text-center mt-4 mb-3']"
      ).getText()) == "Welcome to Demo Event"
    ) {
      console.log("Event text is displayed");
    } else if (
      (await $("div[class='col-lg-12 text-center mb-4']").getText()) ==
      "Event is not started yet"
    ) {
      console.log("Welcome to Demo Event Text is displayed");
    } else {
      meetingsuccess = false;
      console.log("Event text isn't displayed");
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
