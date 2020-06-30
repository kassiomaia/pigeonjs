if (process.env.ENV === 'production') {
  module.exports = require('./lib/pigeon.min.production.js')
} else {
  module.exports = require('./lib/pigeon.development.js')  
}