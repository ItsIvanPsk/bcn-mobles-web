import * as quasarServer from '../dist/ssr/index.js'

export default async function handler(req, res) {
  try {
    const html = await quasarServer.render({ req, res })
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
  } catch (err) {
    console.error('[SSR Error]', err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
