class WelcomeDemoEventPage{
    get welcomeDemoEventPageHeader() { return $("//h1"); }
    get selectAudioButton() { return $("//mat-icon[text()=' mic_off ']"); }
    get selectVideoButton() { return $("//mat-icon[text()=' videocam_off ']"); }
    get dontJoinButton() { return $("//button[@class='btn btn-lg btn-danger-outline ng-star-inserted']")}

    async clickOnselectAudioButton() {
        await this.selectAudioButton.waitForDisplayed({timeout: 5000});
        await this.selectAudioButton.click();
    }

    async clickOnselectVideoButton() {
        await this.selectVideoButton.waitForDisplayed({timeout: 5000});
        await this.selectVideoButton.click();
    }

    async clickOndontJoinButton() {
        await this.dontJoinButton.waitForDisplayed({timeout: 5000});
        await this.dontJoinButton.click();
    }

}
export default new WelcomeDemoEventPage()