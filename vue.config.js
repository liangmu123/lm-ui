module.exports = process.env.NODE_ENV === 'development' ? (
  require('./build/development')
) : (
  require('./build/production')
)