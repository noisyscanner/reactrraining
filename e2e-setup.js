const fs = require('fs')
const path = require('path')

const seleniumStandalone = require('selenium-standalone')
const configFileIn = path.join(__dirname, 'config', 'nightwatch.json')
const config = require(configFileIn)

seleniumStandalone.install((error, fsPaths) => {
  if (error) {
    console.error(error)
    return
  }

  config.test_settings.default.selenium.cli_args['webdriver.chrome.driver'] = fsPaths.chrome.installPath

  const configFileOut = path.join(__dirname, 'nightwatch.json')
  fs.writeFile(configFileOut, JSON.stringify(config, null, 2), 'utf8', (error) => {
    if (error) {
      console.error(error)
    }
  })
})
