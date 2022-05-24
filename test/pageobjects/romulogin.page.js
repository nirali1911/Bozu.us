class LoginPage {

    get loginButton() { return $("//button[@class='btn btn-theme-select mr-3 mt-2 mb-2 ng-star-inserted']"); }
    get emailEnterField() { return $("input[placeholder='Email address or mobile number']"); }
    get passwordEnterField() { return $('(//input[@type="password"])[1]'); }
    get login() { return $("(//button[@class='btn-block btn btn-theme-select'])[1]"); }

    async clickOnloginButton() {
        await this.loginButton.click();
    }

    async clickOnlogin(){
        await this.login.click();
    }
}
export default new LoginPage()