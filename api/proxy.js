const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/backend')) {
    target = 'https://buying999.sharepoint.com/$1'
  }
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/backend/': '/'
    }
  })(req, res)
}

