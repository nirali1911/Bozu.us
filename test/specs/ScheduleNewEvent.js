describe("interaction with web element",function()
{
    it("enter the value in the field",async() => {
      //  await browser.url('https://bozu.us/home');
        //browser.maximizeWindow()
      
await browser.url("https://bozu.us")
await browser.maximizeWindow();
let login=await $("//button[text()='Login']")
await login.click();
let email=await $("input[placeholder='Email address or mobile number']")
await email.setValue("niraliwdv@gmail.com")
let password=await $("input[placeholder='Password']")
await password.setValue("Mypassword55#")
let loginBtn=await $("//button[text()='Login ']")
await loginBtn.click();
await browser.pause(3000)

let ScheduleNewEvent=await $("//mat-icon[text()='event_available']")
//await browser.pause(5000)
await ScheduleNewEvent.click();


let EventName=await $("input[placeholder='Event Name']")
await $(EventName).clearValue()

let EventName2 = await $("input[placeholder='Event Name']")
    await EventName2.addValue('Event')
    await EventName2.addValue(1)
    await browser.pause(5000);

    //let Layout=await $("//label[@class=('mb-1 text-first')]")
    //await Layout.selectByAttribute('value','hexagon')
    //await $(Layout).selectByAttribute(hexagon,'hexagon')
    //await browser.pause(3000)

  });

  it('Should demonstrate the selectByAttribute command', async () => {
    const selectBox = await $("//label[@class='mb-1 text-first']");
    const value = await selectBox.getValue();
    console.log(value); // returns "someValue0"

    await selectBox.selectByAttribute('value', hexagon);
    console.log(await selectBox.getValue()); // returns "someValue3"

    await selectBox.selectByAttribute('name', hexagon);
    console.log(await selectBox.getValue()); // returns "someValue5"
});

  it('should demonstrate the scrollIntoView command', async () => {
    const CreateEvent = await $("//button[@class='btn btn-theme-select m-auto ng-star-inserted']")
    await browser.pause(5000);

    await CreateEvent.scrollIntoView("//button[@class='btn btn-theme-select m-auto ng-star-inserted']")
    await browser.pause(3000)


    await CreateEvent.click();
    await browser.pause(10000)

  });

});