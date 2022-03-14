describe("interaction with web element", function(){

    it("enter value in the field", async()=>{
        await browser.url('/');
        let search =await $('#twotabsearchtextbox');
        await search.setValue("Apple Mac Book");
        await browser.pause(10000);
    })




});

