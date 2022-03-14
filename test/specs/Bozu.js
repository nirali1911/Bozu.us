describe("interaction with web element",function()
{
    it("enter the value in the field",async() => {
      //  await browser.url('https://bozu.us/home');
        //browser.maximizeWindow()
      
await browser.url("https://bozu.us")
console.log('-----start----------')
await browser.maximizeWindow();
let login=await $("//button[text()='Login']")
await login.click();
let email=await $("input[placeholder='Email address or mobile number']")
await email.setValue("niraliwdv@gmail.com")
let password=await $("input[placeholder='Password']")
await password.setValue("Mypassword55#")
let loginBtn=await $("//button[text()='Login ']")
await loginBtn.click();

let StartNewEventNow=await $("//mat-icon[text()='event_note']")
await browser.pause(5000)
await StartNewEventNow.click();


let EventName=await $("input[placeholder='Event Name']")
await $(EventName).clearValue()

let EventName2 = await $("input[placeholder='Event Name']")
    await EventName2.addValue('Event')
    await EventName2.addValue(1)

      //  EventName2 = await EventName2.getValue()
    //EventName2(EventName2 === 'Event1')
   await browser.pause(2000);

    });

    it('should demonstrate the scrollIntoView command', async () => {
      const EnterEmail = await $("//button[text()='Save And Start Event']")
      await browser.pause(5000);
      // scroll to specific element
      await EnterEmail.scrollIntoView("//button[text()='Save And Start Event']")
      await browser.pause(3000)

      let EnterEmailaddresses=await $("input[placeholder='Enter Email addresses']")
      await EnterEmailaddresses.setValue("niraliwdv@gmail.com")
      await browser.keys("Enter")
      //setValue- It clearn the entered test and enters the new text.
      // addValue- appends the text to existing text.
      
      await EnterEmailaddresses.addValue("test@yopmail.com")
      await browser.keys("Enter")
      await browser.pause(500)
      await EnterEmailaddresses.addValue("testone@yopmail.com")
      await browser.keys("Enter")
      await browser.pause(500)
      await EnterEmailaddresses.addValue("testtwo@yopmail.com")
      await browser.keys("Enter")
      await browser.pause(500)
      await EnterEmailaddresses.addValue("testthree@yopmail.com")
      await browser.keys("Enter")
      await browser.pause(500)
      await EnterEmail.click();
      await browser.pause(10000)

      //let EnterEmailaddresses=await $("input[placeholder='Enter Email addresses']")
      //await EnterEmailaddresses.setValue("test@yopmail.com")

      //await browser.pause(10000);

     // await browser.alertDismiss();

  });


    
});