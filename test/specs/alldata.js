import {joineventnowsendemailpass,joineventnowsendemailfail,videosendemailpass,videosendemailfail, audiosendemailpass, audiosendemailfail,sharescreensendemailpass,sharescreensendemailfail,cancelbuttonsendemailpass,cancelbuttonsendemailfail,joingroupsendemailpass,joingroupsendemailfail,joindemomeetingsendemailpass,joindemomeetingsendemailfail,joindemomeetingnowsendemailpass,joindemomeetingnowsendemailfail,successemailsend} from "./Nodemailerdemo.js"


describe("interaction with web element",function()
{
    it("enter the value in the field",async() => {

        console.log("Entering Bozu US");

        let meetingsuccess=true;

        await browser.url("https://bozu.us")
        await browser.maximizeWindow();
        await browser.pause(5000);

        let JoinEvent=await $("//button[@class='btn btn-theme-select mt-2 mb-2']");
            await JoinEvent.waitForDisplayed({timeout:10000});
                    await JoinEvent.click();
                    await browser.pause(10000);
                    console.log(await browser.getUrl());

                    
                 if(await browser.getUrl()=="https://bozu.us/joinevent") 
                     
                 {            
                    //await joineventnowsendemailpass();
                    console.log("Successfully redirect on Join Demo Meeting page");
                 }
                 else
                 {
                   meetingsuccess=false;
                  await joineventnowsendemailfail();       
                  console.log("Failed to redirect on Join Demo Meeting page");
                 } 
              
        let JoinDemoMeeting=await $("div[class='col-12 mt-4 text-center mb-3']");
           if(await JoinDemoMeeting.isClickable()){    
              await JoinDemoMeeting.click();
        //await joindemomeetingsendemailpass();
        //await browser.pause(5000);
        }
        else{
          meetingsuccess=false;
          await joindemomeetingsendemailfail();
        }

        let Enteryourname=await $("input[placeholder='Enter your name ']");
        await Enteryourname.waitForDisplayed({timeout:15000});
        await Enteryourname.addValue("nirali");
        await browser.pause(5000);

        let JoinDemoMeetingNow=await $("div[class='col-lg-12 col-md-12 col-12 text-center mb-4']");   
          //if(await JoinDemoMeetingNow.isClickable()){    
        await JoinDemoMeetingNow.click();
        await browser.pause(3000);
          if(await $("div[class='col-lg-12 col-md-12 col-12 text-center mt-4 mb-3']").getText()=='Welcome to Demo Event')
          {
        //await joindemomeetingnowsendemailpass();
        console.log("Entered in to Welcome to Demo Event page");
          }
          else{
            meetingsuccess=false;
            await joindemomeetingnowsendemailfail();
            console.log("Failed to get Welcome to Demo Event text");
          }
            
        let JoinEventNow=await $("//button[@class='btn btn-lg btn-green-select ml-3']");
        await JoinEventNow.waitForDisplayed({timeout:5000});
         // console.log("******************"+text);  
         //let textt = await $("//button[contains(text(),'Okay')]").getText();
         await JoinEventNow.isClickable();
         await JoinEventNow.click();
         await browser.pause(6000);
          if(await $("(//button[@class='btn btn-theme-select mb-lg-2'])[1]").getText()=='Okay')
            {
              console.log("Clicked on JoinEventNow button also OKAY button pop up is visible");
            }
           else {
             meetingsuccess=false;
             console.log("Unclicked on JoinEventNow button also OKAY button pop up is Invisible");
           }

        let Okay=await $("//button[@class='btn btn-theme-select mb-lg-2']");
        await Okay.click();
        console.log("Hiiiiiiiiiiiiiiiii#######"+Okay);
        await browser.pause(5000)
            if(await $("div[class='d-flex title-abs-center align-items-center ng-star-inserted']").getText()=='Demo Event'){
          console.log("Entered in to DemoEvent page");
            }
            else{
              meetingsuccess=false;
              console.log("Failed to get DemoEvent text");
            }
            

        let Cancel=await $("//a[@class='text-first ml-auto d-flex align-item-baseline a-no-underline']");
        if(await Cancel.isDisplayed()){
        await Cancel.click();
        await browser.pause(150000);
        }

        let BozuStory=await $("//div[contains(text(),'BOZU STORY')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']");
        //let BozuStory=await $("//div[contains(text(),' Atul's Group ')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']");
        await BozuStory.waitForDisplayed({timeout:10000})
        await BozuStory.click();
        await browser.pause(10000);
       

        let JoinGroup=await $("//label[@class='ml-2']");  
        await JoinGroup.waitForDisplayed({timeout:10000});
        let groupname=$("div[class='profile-initials-container ng-star-inserted']").getText();//check
          if(await JoinGroup.isClickable())
          {
            await JoinGroup.click();
            await browser.pause(5000);
            //await joingroupsendemailpass();
            //await browser.pause(3000);
          if(await groupname=='nirali') //check
            {
              console.log("Successfully entered into BOZU STORY Group");
            }
          else
          {

              console.log("Unable to entered into BOZU STORY Group");
          }
          }
          else{
            meetingsuccess=false;
            await joingroupsendemailfail();
          }
            //check
        let audio=await $('#Icon_awesome-microphone-alt-slash');
        let mute = await $('Icon_awesome-microphone-alt');
          if(await audio.isEnabled()){
        await audio.click();
        await browser.pause(3000);
        await mute.isDisplayed();{
          console.log("Mute Text is displayed");
        }
        //await audiosendemailpass();
        //await browser.pause(3000);
        }
          else
          {
            meetingsuccess=false;
            await audiosendemailfail();
            console.log("Mute text isn't displayed");
          }
         
        let video=await $('#Icon_awesome-video-slash');
        let turnvideooff = await $('#Icon_awesome-video');
          if(await video.isEnabled()){
        await video.click();
        await browser.pause(3000);
        await turnvideooff.isDisplayed();{
          console.log("Turn off video text is displayed");
        }
        //await videosendemailpass(); 
        //await browser.pause(3000);
      }
          else{
            meetingsuccess=false;
        console.log("Turn video off text isn't displayed");
        await videosendemailfail();
      }

      let sharescreen=await $("//li[@class='nav-item d-lg mr-2']");
        if(await sharescreen.isEnabled())
        {
          await sharescreen.click();
          await browser.pause(5000);

          if(await $('#share_screen_deselect'));
          {
            console.log("Sharescreen got clicked");
          }
        }
          else{
            meetingsuccess=false;
            await sharescreensendemailfail();
            console.log("Sharescreen got unclicked");
              }
        
          //else{
            //await sharescreensendemailfail();
            
              //}
        
          let Cancelbutton=await $("//a[@class='nav-item nav-link']");
          if(await Cancelbutton.isClickable()){
        await Cancelbutton.click();
        await browser.pause(5000);
        //await cancelbuttonsendemailpass();
        //await browser.pause(5000);
          }
            else{
              meetingsuccess=false;
              await cancelbuttonsendemailfail();
            }     
            if(meetingsuccess)
            {
              await successemailsend();

            }
  });
      
});