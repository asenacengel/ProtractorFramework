var dashboardPage = require("../Pages/VyTrackDashBoard.js");
var VyTrackLoginPage = require("../Pages/VytrackLoginPage.js");
var VytrackJson = require("../Resources/VyTrack.json");
const VyTrackDashBoard = require("../Pages/VyTrackDashBoard.js");
var actions = browser.actions();




describe('Dashboard Test', () => {

    it('Login', () => {
        browser.get(VytrackJson.URL);
        VyTrackLoginPage.UserName.sendKeys(VytrackJson.UserName);
        VyTrackLoginPage.password.sendKeys(VytrackJson.Password);
        VyTrackLoginPage.button.click();
        browser.sleep(5000);

    });



    it('Go to dashboard and Click it', () => {

        browser.actions().mouseMove(VyTrackDashBoard.dashboard).click().perform();
        browser.sleep(2000);
        browser.actions().mouseMove(VyTrackDashBoard.dashboardButton).click();
        browser.actions().mouseMove(VyTrackDashBoard.accountButton).click().perform();
        browser.sleep(2000);


    });
    it('Click Account and dropdown all', () => {

        browser.actions().
            mouseDown(VyTrackDashBoard.allCheckBox).
            mouseMove(VyTrackDashBoard.allButton).
            mouseUp().
            perform();


    });
    it('Click Account and dropdown All-visible', () => {
        browser.actions().
            mouseDown(VyTrackDashBoard.allCheckBox).
            mouseMove(VyTrackDashBoard.allVisibleButton).
            mouseUp().
            perform();

    });
    it('Click Account and dropdown None', () => {
        browser.actions().
            mouseDown(VyTrackDashBoard.allCheckBox).
            mouseMove(VyTrackDashBoard.noneButton).
            mouseUp().
            perform();


    });
    it('Click Account and get text', () => {
        browser.actions().mouseMove(VyTrackDashBoard.clickAccount).click().perform();
        browser.actions().mouseMove(VyTrackDashBoard.general).click().perform();
        var text = "General";
        expect(VyTrackDashBoard.general.getText()).toEqual(text);

    });
    it('Click Activity and get text', () => {
        browser.actions().mouseMove(VyTrackDashBoard.activity).click().perform();
        var accText = "No activities found";
        expect(VyTrackDashBoard.activityText.getText()).toEqual(accText);


    });
    it('Click Opportunities and get text', () => {
        browser.actions().mouseMove(VyTrackDashBoard.opportunities).click().perform();
        var otext = "No records found";
        expect(VyTrackDashBoard.opText.getText()).toEqual(otext);

    });
    it('Click Additional Information and get text', () => {
        browser.actions().mouseMove(VyTrackDashBoard.additionalInfo).click().perform();
        var additionalText = "No records found";
        expect(VyTrackDashBoard.additionalText.getText()).toEqual(additionalText);

    });
    it('Oportunities creating option', () => {
        browser.actions().mouseMove(VyTrackDashBoard.opportunities).click().perform();
        browser.sleep(2000);
        browser.actions().mouseMove(VyTrackDashBoard.option).click().perform();
        browser.actions().mouseMove(VyTrackDashBoard.save_as).click().perform();
        browser.actions().mouseMove(VyTrackDashBoard.name).sendKeys("test").perform();
        browser.sleep(5000);
        browser.actions().mouseMove(VyTrackDashBoard.saveButton).click().perform();
        browser.sleep(3000);


    });
    it('Delete option in Oportunities Module', () => {

        browser.sleep(2000);
        browser.actions().mouseMove(VyTrackDashBoard.option).click().perform();
        browser.actions().mouseMove(VyTrackDashBoard.deleteButton).click().perform();
        browser.actions().mouseMove(VyTrackDashBoard.yesDeleteButton).click();


    });

});