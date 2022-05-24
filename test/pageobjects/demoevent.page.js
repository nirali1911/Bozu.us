class DemoEvent {

    get joinEventNow() { return $("//button[@class='btn btn-lg btn-green-select ml-3']"); }
    get okayButton() { return $("//button[@class='btn btn-theme-select mb-lg-2']"); }
    get cancelPopupButton() { return $("//a[@class='text-first ml-auto d-flex align-item-baseline a-no-underline']"); }
    get bozuStory() { return $("//div[contains(text(),'BOZU STORY')]//parent::div//div[@class='position-relative dropleft d-flex ng-star-inserted']"); }
    get okayPopup() { return $("(//button[@class='btn btn-theme-select mb-lg-2'])[1]");}
    get demoEventHeader() { return $("div[class='d-flex title-abs-center align-items-center ng-star-inserted']"); }
    get joinGroup() { return $("//label[@class='ml-2']"); }
    get insertedPeer() { return $("//h4[text()='Nirali']"); }
    get audioButton() { return $("#Icon_awesome-microphone-alt-slash"); }
    get videoButton() { return $("#Icon_awesome-video-slash"); }
    get sharescreenButton() { return $("//li[@class='nav-item d-lg mr-2']"); }
    get cancelButton() { return $("//a[@class='nav-item nav-link']"); }
    get mute() { return $("#Icon_awesome-microphone-alt"); }
    get turnvideooff() { return $("#Icon_awesome-video"); }
    get sharescreenDeSelect() { return $("#share_screen_deselect"); }
    get aAudio() { return $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Atul']/parent::div//mat-icon[text()=' mic']"); }
    get aVideo() { return $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Atul']/parent::div//mat-icon[text()='videocam']"); }
    get bAudio() { return $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Bhavika']/parent::div//mat-icon[text()=' mic']"); }
    get bVideo() { return $("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name') and text()='Bhavika']/parent::div//mat-icon[text()='videocam']"); }
    get jAudio() { return $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Jaydeep']/parent::div//mat-icon[text()=' mic']"); }
    get jVideo() { return $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Jaydeep']/parent::div//mat-icon[text()='videocam']"); }
    get uAudio() { return $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Unnati']/parent::div//mat-icon[text()=' mic']"); }
    get uVideo() { return $("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name') and text()='Unnati']/parent::div//mat-icon[text()='videocam']"); }
    get bozuStoryPeers() { return $$("//div[contains(text(),'BOZU STORY')]/../../..//label[contains(@class, 'peer-name')]"); }
    get bozuTechStoryPeers() { return $$("//div[contains(text(),'BOZU TECH TALK')]/../../..//label[contains(@class, 'peer-name')]"); }
    get atulVideoVisibility() { return $("//label[text()='Atul']/../following-sibling::video"); }
    get bhavikaVideoVisibility() { return $("//label[text()='Bhavika']/../following-sibling::video"); }
    get jaydeepVideoVisibility() { return $("//label[text()='Jaydeep']/../following-sibling::video"); }
    get unnatiVideoVisibility() { return $("//label[text()='Unnati']/../following-sibling::video"); }
    
    async clickOnJoinEventNowButton() {
        await this.joinEventNow.waitForClickable({ timeout: 40000 })
        await this.joinEventNow.click();
    }

  
    async clickOnOkButton() {
        await this.okayButton.waitForClickable({ timeout: 40000 })
        await this.okayButton.click();
    }

    async clickOnCanelPopupIfDisplayed() {
        if (await this.cancelPopupButton.isDisplayed()) {
            await this.cancelPopupButton.click();
        }
    }

    async clickOnBozuStory() {
        await this.bozuStory.waitForClickable({timeout: 10000 });
        await this.bozuStory.click();
    }

    async clickOnjoinGroup() {
        await this.joinGroup.waitForDisplayed({ timeout: 5000 });
        await  this.joinGroup.click()
    }

    async clickOnaudioButton() {
        await this.audioButton.waitForClickable({timeout: 5000});
        await this.audioButton.click();
    }

    async clickOnvideoButton() {
        await this.videoButton.waitForClickable({timeout: 5000});
        await this.videoButton.click();
    }

    async clickOnsharescreenButton() {
        await this.sharescreenButton.waitForClickable({timeout: 10000});
        await this.sharescreenButton.click();
    }

    async clickOncancelButton() {
        await this.cancelButton.waitForClickable({timeout: 5000});
        await this.cancelButton.click();
    }
}
export default new DemoEvent()