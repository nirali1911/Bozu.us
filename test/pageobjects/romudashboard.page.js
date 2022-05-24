class Dashboard {
    get bozuGaming() { return $("(//div[@class='circle-container-blue'])[4]"); }

    async clickOnbozuGaming(){
        await this.bozuGaming.click();
    }

}
export default new Dashboard()