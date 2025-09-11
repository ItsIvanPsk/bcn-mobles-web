import * as quasarServer from '../dist/ssr/index.js'

export default async function handler(req, res) {
  try {
    // Quasar expone `render` en su objeto
    const result = await quasarServer.render({
      url: req.url,
      req,
      res,
    })

    res.statusCode = result.statusCode || 200
    res.setHeader('Content-Type', 'text/html')
    res.end(result.html)
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
