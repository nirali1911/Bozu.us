describe("interaction with web element",function()
{
    it("enter the value in the field",async() => {
     
await browser.url("https://bozu.us")
await browser.maximizeWindow();
await browser.pause(5000);
let JoinEvent=await $("//button[@class='btn btn-theme-select mt-2 mb-2']");
await JoinEvent.waitForDisplayed({timeout:90000});
//let JoinEvent=await $("//button[text()='Join Event Now']");
await JoinEvent.click();
await browser.pause(3000)

let JoinDemoMeeting=await $("div[class='col-12 mt-4 text-center mb-3']");
await JoinDemoMeeting.click();
await browser.pause(3000)

let Enteryourname=await $("input[placeholder='Enter your name ']");
await Enteryourname.addValue("Nirali");
await browser.pause(3000);

let JoinDemoMeetingNow=await $("div[class='col-lg-12 col-md-12 col-12 text-center mb-4']");
await JoinDemoMeetingNow.click();
await browser.pause(3000)

let JoinEventNow=await $("//button[@class='btn btn-lg btn-green-select ml-3']");
await JoinEventNow.click();
await browser.pause(5000)

let Okay=await $("//button[@class='btn btn-theme-select mb-lg-2']");
await Okay.click();
await browser.pause(5000)

let Cancel=await $("//a[@class='text-first ml-auto d-flex align-item-baseline a-no-underline']");
if(await Cancel.isDisplayed()){
  await Cancel.click();
}
await browser.pause(5000)

//let BozuTechsupport=await $("//div[text()=' Bozu Tech support  ']");
//let BozuStory=await $("//div[@class='text-overflow float-left text-white']");  
//let BozuTechsupport=await $("//div[text()=' Bozu Tech support  ']");
//await browser.pause(3000);
//let BozuStory=await $("//div[contains(text(),' Bozu Story  ')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']");
let BozuStory=await $("//div[contains(text(),'BOZU STORY')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']");
BozuStory.waitForDisplayed({timeout:10000});
//console.log('-----bozustory----------',BozuStory)
await BozuStory.click();
await browser.pause(2000);

//let BozuStory=await $("//div[text()=' Bozu Story  ']");
//let Dot=await $("//div[@class='position-relative dropleft d-flex ng-star-inserted show']");
//console.log('-----dot----------',Dot)
//await Dot.click();
//await browser.pause(6000);

 let JoinGroup=await $("//label[@class='ml-2']");//label[text()='Join Group']
 JoinGroup.waitForDisplayed({timeout:10000});
 await JoinGroup.click();
 await browser.pause(5000);

 let audio=await $('#Icon_awesome-microphone-alt-slash');
 await audio.click();
 await browser.pause(10000);

 let video=await $('#Icon_awesome-video-slash');
 await video.click();
 await browser.pause(10000);


  });


  
});