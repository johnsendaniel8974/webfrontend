const env = process.env.NODE_ENV || 'development';

const apis_by_environment = {
  development : {
    playven : 'http://localhost:3030/api',
    assets : 'http://localhost:3030'
  },
  test : {
    playven : 'http://localhost:3030/api'
  },
  production : {
    playven : 'https://rc.playven.com/api',
    assets : 'https://rc.playven.com'
  }
}

module.exports = apis_by_environment[env];
