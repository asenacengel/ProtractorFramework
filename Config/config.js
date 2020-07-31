exports.config = {
    framework: "jasmine",    // name of framework
    seleniumAddress: "http://localhost:4444/wd/hub",    // remote web server
    directConnect: true,
    //capabilities:{browserName : "Chrome"},  // runs the test cases given browser name
    multicapabilities: [{ browserName: "chrome" },],   // run the test case from different browser
    specs: ["../Specs/spec7.js"], // its for stepdefinition path

    //suites:{
    //  smoke: "../Specs/spec2.js",
    // regression: "../Specs/spec3.js"
    // },
    onPrepare: function () {     // runs before each test cases

        browser.waitForAngularEnabled(false); // disable the waiting time for angular
        browser.manage().timeouts().implicitlyWait(10000);  // implicitly wait
        browser.manage().window().maximize();

        let HtmlReporter = require("protractor-beautiful-reporter");
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                baseDirectory: "../Reports/VYTrackReports",
                takeScreenShotsOnlyForFailedSpecs: true
            }).getJasmine2Reporter()


        );

    }

}