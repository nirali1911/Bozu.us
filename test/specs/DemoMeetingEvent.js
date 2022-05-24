import {successmail,failuremail} from "./Nodemailerdemo.js"

describe("interaction with web element",function()
{
    it("enter the value in the field",async() => {
       
        let JoinEvent=await $("//button[@class='btn btn-theme-select mt-2 mb-2']");
       
        try
      {
        let bTestCaseSuccess = true;
        console.log("Entering Bozu US");
     
        await browser.url("https://bozu.us")
        await browser.maximizeWindow();
        await browser.pause(5000);

        console.log("Finding the button");
        
        
        let bJoinEventButton = JoinEventButton != undefined && JoinEventButton != null;

        console.log("Button existance response : "+bJoinEventButton);

        if(bJoinEventButton)
        {
          let bButtonDisplayedResponse = false;

          try
          {
            bButtonDisplayedResponse = await JoinEventButton.waitForDisplayed({timeout:5000});
          }
          catch(e)
          {
            console.log("Error in waitForDisplayed");
            bTestCaseSuccess = false;
          }

          console.log("Button found response : "+bButtonDisplayedResponse);

          if(bButtonDisplayedResponse)
          {
            const text= await JoinEventButton.getText();

            console.log("Text on button : "+text);

            if(text=="Join Event Now")
            {
              bTestCaseSuccess = true;
            }
            else
            {
              bTestCaseSuccess = false;
            }
          }
          else
          {
            bTestCaseSuccess = false;
          }
        }
        else
        {
          bTestCaseSuccess = false;
        }

        try
        {
          console.log("sending mail for condition : "+bTestCaseSuccess);

          if(bTestCaseSuccess)
          {
            await successmail();
            console.log("success: finding button");
          }
          else
          {
            await failuremail();
            console.log("failure: finding button");
          }
        }
        catch(e)
        {
            console.log("NodeMailer crashed");  
        }
      }
      catch(e)
      {
        
      }

        await JoinEvent.waitForDisplayed({timeout:90000});
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

        let BozuStory=await $("//div[contains(text(),'BOZU STORY')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']");
        BozuStory.waitForDisplayed({timeout:10000});
        await BozuStory.click();
        await browser.pause(2000);

        let JoinGroup=await $("//label[@class='ml-2']");
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