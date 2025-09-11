import http from 'http'
import * as quasarServer from './dist/ssr/index.js'

const server = http.createServer(async (req, res) => {
  try {
    console.log(`[SSR] Request: ${req.url}`)

    // comprobamos qué exporta realmente quasarServer
    console.log('[SSR] exports:', Object.keys(quasarServer))

    if (typeof quasarServer.render !== 'function') {
      throw new Error('❌ quasarServer.render no existe o no es una función')
    }

    const html = await quasarServer.render({ req, res })
    console.log('[SSR] render OK, length:', html?.length)

    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  } catch (err) {
    console.error('[SSR Error]', err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
})

server.listen(3000, () => {
  console.log('SSR test running at http://localhost:3000')
})
