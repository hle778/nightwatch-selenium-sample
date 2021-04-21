var https = require("https");
var lambdaRestClient = require("@lambdatest/node-rest-client");
var lambdaCredentials = {
  username: "hecticodj",
  accessKey: "cTiWTW6JTl9hLPDPqf98nEX2xi58A2GG1KzaE0LwjXQ01Fn9wf"
};
var lambdaAutomationClient = lambdaRestClient.AutomationClient(
  lambdaCredentials
);
module.exports = {
  "@tags": ["test"],
  Google: function(client) {
    client
      .url("https://www.google.com/ncr")
      .waitForElementPresent("body", 20000)
      .setValue("input[type=text]", "LambdaTest\n")
      .pause(2000)
      .assert.title("PRUEBA")
      .end();
  },
  after: function(browser) {
    console.log("Closing down...");
  },
  afterEach: function(client, done) {
    if (
      client.capabilities &&
      client.capabilities["webdriver.remote.sessionid"]
    ) {
      
      lambdaAutomationClient.updateSessionById(
        client.capabilities["webdriver.remote.sessionid"],
        { status_ind: client.currentTest.results.failed ? "failed" : "passed" },
        function(error, session) {
          console.log(error)
          if (!error) {
            client.pause(20000)
            done();
          }
        }
      );
    } else {
      client.pause(20000)
      done();
    }
  }
};
