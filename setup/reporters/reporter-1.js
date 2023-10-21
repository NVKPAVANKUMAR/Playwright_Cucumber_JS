/**************************************************/

/**  
* @author NVK PAVANKUMAR
*/

/**************************************************/

const reporter = require('cucumber-html-reporter')

// These options will be used at the time of HTML Report generation
const options = {
    theme: 'bootstrap',
    jsonFile: 'test-results/cucumber_report.json',
    output: 'test-results/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 101.0.4951.41',
        Platform: 'MAC OS Monterary - Version: 12.3.1',
    },
}

reporter.generate(options)
