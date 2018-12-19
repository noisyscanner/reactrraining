const chromedriver = require('chromedriver')

const nightwatchConfig = {
  output_folder: "reports",
  page_objects_path: "features/page_objects",
  live_output: true,
  disable_colors: false,
  test_settings: {
    default: {
      request_timeout_options: {
        "timeout": 30000,
        "retry_attempts": 2
      },
      webdriver: {
        server_path: chromedriver.path,
        start_process: true,
        cli_args: [
          '--port=4444'
        ]
      },
      launch_url: 'http://localhost:3000',
      screenshots: {
        "enabled": true,
        "on_failure": true,
        "on_error": true,
        "path": "reports/screenshots"
      },
      desiredCapabilities: {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    }
  }
}

module.exports = nightwatchConfig
