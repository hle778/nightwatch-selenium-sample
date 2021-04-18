module.exports = (function(settings) {
  console.log(settings["test_settings"]["default"]["username"]);

  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }
  else {
    settings["test_settings"]["default"]["username"] = hecticodj;
  }
  
  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  else {
    settings["test_settings"]["default"]["access_key"] = cTiWTW6JTl9hLPDPqf98nEX2xi58A2GG1KzaE0LwjXQ01Fn9wf;
  }

  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  console.log(settings);
  return settings;
})(require('./nightwatch.json'));
