import data from "../data/testdata.json"
import urldata from "../data/url.json"

describe("joineventnow button page input data", function () {
    it("should validate joineventpage navigation", async () => {
      
      await browser.url(urldata.joineventpageurl);
      await browser.maximizeWindow();
      await browser.pause(5000);

    let fullNameInput = await $("#fullName");
    //await fullNameInput.waitForClickable({timeout: 20000});
    await fullNameInput.addValue(data.fullname);
    
   // let JoinEventButton = await $(
      //  "//button[@class='btn btn-theme-select']"
      //);
      let JoinEventButton = await $("//button[@class='btn btn-theme-select']");
      await JoinEventButton.waitForDisplayed({ timeout: 3000 });
      await JoinEventButton.click();
     // await browser.pause(5000);

      let JoinEventNowButton = await $("(//button[@class='btn btn-lg btn-green-select ml-3'])[1]");
      await JoinEventNowButton.waitForDisplayed({ timeout: 10000 });
      await JoinEventNowButton.click();
     

     let Okay = await $("(//button[@class='btn btn-theme-select mb-lg-2'])[1]");
     await Okay.click();
     await browser.pause(5000);

    let creategroup = await $("//label[@class='mat-tooltip-trigger mb-0 d-lg ng-star-inserted']");
    await creategroup.click();

    // await browser.pause(5000);

    // let locate = await $("#Icon_map-fullscreen-2");
    // await locate.click();

    //await browser.pause(5000);

    //  let source = await $("(//div[@class='col-lg-12 position-relative d-flex h-100 videoContainer-hexagon'])[3]");
    //  let destination = await $("(//div[@class='col-lg-12 position-relative d-flex h-100 videoContainer-hexagon'])[1]");
      const source = await $("//h4[text()='Nirali']/parent::div");
      const destination = await $("//h4[text()='QA']/parent::div");
      
    // await source.waitForDisplayed();
     //await destination.waitForDisplayed();
     await source.dragAndDrop(destination, 10);

    // await browser.performActions([{
    //   type: 'pointer',
    //   id: 'finger1',
    //   parameters: { pointerType: 'mouse' },
    //   actions: [
    //     { type: 'pointerMove', duration: 0, origin: source, x: 0, y: 0 },
    //     { type: 'pointerDown', button: 0 },
    //     { type: 'pause', duration: 10 },
    //     { type: 'pointerMove', duration: 0, origin: destination, x: 0, y: 0 },
    //     { type: 'pointerUp', button: 0 }
    //   ]
    // }]);

    //  await browser.pause(10000);

    //  let locationSource = await source.getLocation();
    //  let locationDestination = await destination.getLocation();

    //  let sourceSize = await source.getSize();
    //  let desitnationSize = await destination.getSize();

    //  let sourceX = parseInt(locationSource.x + (sourceSize.width / 2))
    //  let sourceY = parseInt(locationSource.y + (sourceSize.height / 2))

    //  let destX = parseInt(locationDestination.x + (desitnationSize.width / 2))
    //  let destY = parseInt(locationDestination.y + (desitnationSize.height / 2))

    // console.log(sourceX, sourceY, destX, destY)

    //  await browser.performActions([
    //    {
    //      type: "pointer",
    //      id: "finger1",
    //      parameters: { pointerType: "mouse" },
    //      actions: [
    //        {
    //          type: "pointerMove",
    //          duration: 0,
    //          origin : source,
    //          x: 0,
    //          y: 0,
    //        },
    //        { type: "pointerDown", button: 0,  duration: 1000 },
    //        {
    //          type: "pointerMove",
    //          duration: 15000,
    //          origin: destination,
    //          x: 0,
    //          y: 0,
    //        },
    //        { type: "pointerUp", button: 0 },
    //      ],
    //    },
    //  ]);

    // await browser.performActions([
    //   {
    //     type: "pointer",
    //     id: "finger1",
    //     parameters: { pointerType: "mouse" },
    //     actions: [
    //       {
    //         type: "pointerMove",
    //         duration: 0,
    //         origin: source,
    //         x: 0,
    //         y: 0,
    //       },
    //       { type: "pointerDown", button: 0 },
    //       { type: 'pause', duration: 10},
    //       {
    //         type: "pointerMove",
    //         duration: 0,
    //         origin: destination,
    //         x: parseInt(desitnationSize.width/2),
    //         y: parseInt(desitnationSize.height/2),
    //       },
    //       { type: "pointerUp", button: 0 },
    //     ],
    //   },
    // ]);
  
    await browser.releaseActions();

     await browser.pause(20000);

      });
  });

  // describe("host page navigation", function () {
  //    it("should validate joineventpage navigation", async() => {

  //      await browser.url(urldata.hostpageurl);
  //      await browser.maximizeWindow();
  //      await browser.pause(5000);

       





  //    });

  //  });