var amazonPage = require("../Pages/AmazonPage.js");
var testData = require("../Resources/TestData1.json");
var actions = browser.actions();
describe('Test Group 5', () => {

    it('"Search for Apple"', () => {

      amazonPage.searchBox.sendKeys(testData.Item1);
      actions.sendKeys(protractor.Key.ENTER).perform();
        
    });
    
});

