import peerone from "../data/peerone.json"
import joinEventNowHexagonPage from "../pageobjects/joinEventNowHexagon.page"


describe("Hexagone peer moving", function(){

    this.beforeEach("Open app", async () => {

        await browser.url(peerone.url);
        await browser.maximizeWindow();
    });

    it("should validate joineventnow page navigation", async () => {

        await joinEventNowHexagonPage.inputOnFullName(peerone.fullname);
        await joinEventNowHexagonPage.clickOnJoinEventButton();
        

    });



});
