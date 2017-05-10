const bunyan = require('bunyan')

const log = bunyan.createLogger({
  name: 'app',
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'debug',
      path: './logs/app-debug.log'  // log DEBUG and above to a file
    },
    {
      level: 'error',
      path: './logs/app-error.log'  // log ERROR and above to a file
    }
  ]
});

module.exports = log