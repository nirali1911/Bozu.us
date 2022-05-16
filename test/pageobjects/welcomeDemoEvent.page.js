class WelcomeDemoEventPage{
    get welcomeDemoEventPageHeader() { return $("//h1"); }
    get selectAudioButton() { return $("//mat-icon[text()=' mic_off ']"); }
    get selectVideoButton() { return $("//mat-icon[text()=' videocam_off ']"); }


    async clickOnselectAudioButton() {
        await this.selectAudioButton.waitForDisplayed({timeout: 5000});
        await this.selectAudioButton.click();
    }

    async clickOnselectVideoButton() {
        await this.selectVideoButton.waitForDisplayed({timeout: 5000});
        await this.selectVideoButton.click();
    }

}
export default new WelcomeDemoEventPage()