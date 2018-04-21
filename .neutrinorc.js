module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Semiquaver'
        }
      }
    ],
    [
      '@neutrinojs/dev-server',
      {
        https: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        proxy: {
          "/api": "http://localhost:8585/"
        }
      }
    ],
    '@neutrinojs/jest'
  ],
  options: {
    mains: {
      index: 'index',
      go: 'go'
    }
  }
};
