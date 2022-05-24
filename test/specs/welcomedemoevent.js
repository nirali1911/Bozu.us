describe('Login Test Suite', () => {
    // TC2
    
    let JoinDemoMeeting=$("div[class='col-12 mt-4 text-center mb-3']");
    let Enteryourname=$("input[placeholder='Enter your name ']");
    let JoinDemoMeetingNow=$("div[class='col-lg-12 col-md-12 col-12 text-center mb-4']");
    let WelcomDemoEventPage=$("[class='text-first ng-star-inserted']");

    it('should warn the user on unsuccessful login', () => {   
        browser.url("https://bozu.us")
        browser.maximizeWindow();
        rowser.pause(5000);
        
    if(JoinDemoMeeting.isDisplayed()){
        JoinDemoMeeting.click();
       
        Enteryourname.addValue("Nirali");
        JoinDemoMeetingNow.click();
        const welcomeDemoEventPageTitle =  WelcomDemoEventPage.getText();
        expect(welcomeDemoEventPageTitle).to.equal('Welcome to Demo Event');}

        else(!JoinDemoMeeting.isDisplayed()) 
        {
            JoinDemoMeeting.isEnabled({timeout:5000, timeoutMsg: "Join eventDemoButton is not enabled"});}
    });
});