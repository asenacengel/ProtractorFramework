var actions = browser.actions();
var googlePage = require("../Pages/GooglePage.js"); // gets element from google page
var testData = require("../Resources/TestData1.json");

describe('"Test group3"', () => {

    it('"Search apple on google website"', () => {
        
        //input[@name='q']
        //var SearchBox = element(by.xpath("//input[@name='q']"));
        googlePage.SearchBox.sendKeys(testData.Item1);
        browser.sleep(3000);
        actions.sendKeys(protractor.Key.ENTER).perform();
    });
    
});