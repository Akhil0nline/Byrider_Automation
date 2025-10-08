const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Byrider DiscoverPro | Somke Test",
    pageTitle: "DiscoverPro",
    displayDuration: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "136.0.7103.93",
        },
        device: "SUYCOKHWLAP300",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Byrider | DiscoverPro" },
            { label: "Release", value: "QA" },
            { label: "Cycle", value: "Smoke" }
        ],
    },
});