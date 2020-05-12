const path = require('path');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins')

const nextConfiguration = {
  webpack: config => {
    config.resolve.modules.push(__dirname)
    config.resolve.alias['@styles'] = path.join(__dirname, './styles')
    // config.resolve.alias['@src'] = path.join(__dirname, 'src')

    if (config.resolve.alias) {
      delete config.resolve.alias['react']
      delete config.resolve.alias['react-dom']
    }
    return config
  }
}

module.exports = withPlugins([[withSass]], nextConfiguration)