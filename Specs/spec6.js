var VytrackJson = require("../Resources/VyTrack.json");
var VyTrackLoginPage = require("../Pages/VytrackLoginPage.js");
var VYTrackHomePages = require("../Pages/VYTrackHomePage.js")
var actions = browser.actions();



describe('Test Group 6', () => {

    it('Log Into Vytrack application ', () => {
        browser.get(VytrackJson.URL);


    });
    it('Enter Credentials', () => {
        VyTrackLoginPage.UserName.sendKeys(VytrackJson.UserName);
        VyTrackLoginPage.password.sendKeys(VytrackJson.Password);
        VyTrackLoginPage.button.click();
        browser.sleep(5000);
    });
    it('Go to Fleet,click the Vehicle', () => {

        browser.actions().mouseMove(VYTrackHomePages.Fleet).click().perform();
        browser.sleep(2000);
        browser.actions().mouseMove(VYTrackHomePages.Vehicles).click().perform();
        //  browser.sleep(3000);



    });
    it('Select all vehicles', () => {

        // var EC = protractor.ExpectedConditions;
        //browser.wait(EC.visibilityOf(VYTrackHomePages.allvehicles), 5000);
        //browser.actions().mouseMove(VYTrackHomePages.allvehicles).click().perform();

        // browser.actions().mouseMove(VYTrackHomePages.AllButton).click().perform();
        //browser.actions().mouseMove(VYTrackHomePages.selectAllButton).click().perform();


    });


});