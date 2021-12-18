const reporter = require('k6-html-reporter');
const options = {
    jsonFile: './reports/report.json',
    output: './reports',
};

reporter.generateSummaryReport(options);