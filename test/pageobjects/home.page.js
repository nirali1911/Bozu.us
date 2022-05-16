class HomePage {

    get joinEventNow()  { return $("//ul//button[text()='Join Event Now']"); }

    async clickOnJoinEventNow() {
        await this.joinEventNow.waitForClickable({ timeout: 10000 });
        await this.joinEventNow.click();
    }

}
export default new HomePage()