var GoogleJson  = require("../Resources/GoogleJson.json")
describe('Test Group 2', () => {
    
    it('Go to Google website', () => {
     
       // browser.get("https://www.google.com")
       browser.get(GoogleJson.URL);
        browser.sleep(3000);
    });
});