class JoinEventNowHexagonPage{

    get fullNameInput(){ return $("input[class='form-control ng-valid ng-touched ng-dirty']"); }

    get joinEventButton(){ return $("//button[@class='btn btn-theme-select']"); }

    async inputOnFullName(fullname){
        await this.fullNameInput.waitForDisplayed();
        await this.fullNameInput.addValue(fullname);
    }

    async clickOnJoinEventButton(){
        await this.joinEventButton.waitForClickable({timeout: 5000});
        await this.joinEventButton.click();
    }
    
}

export default new JoinEventNowHexagonPage()