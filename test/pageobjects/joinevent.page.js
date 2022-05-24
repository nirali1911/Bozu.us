class JoinEvent {
    get joinDemoMeeting() { return $("div[class='col-12 mt-4 text-center mb-3']"); }
    get userName() { return $("input[placeholder='Enter your name ']"); }
    get joinDemoMeetingNow() { return $("div[class='col-lg-12 col-md-12 col-12 text-center mb-4']"); }

    async clickOnJoinDemoMeeting() {
        await this.joinDemoMeeting.waitForClickable({ timeout: 10000 })
        await this.joinDemoMeeting.click();
    }

    async setUser(username) {
        await this.userName.waitForDisplayed({timeout: 50000})
        await this.userName.addValue(username);
    }

    async clickOnJoinDemoMeetingNow() {
        await this.joinDemoMeetingNow.waitForClickable({timeout: 40000})
        await this.joinDemoMeetingNow.click();
    }
}
export default new JoinEvent()