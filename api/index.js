try {
  const quasarServer = require('../dist/ssr/index.js')
  module.exports = quasarServer.default || quasarServer
} catch (err) {
  console.error('SSR server not found, did you run `quasar build -m ssr`?', err)
  throw err
}
