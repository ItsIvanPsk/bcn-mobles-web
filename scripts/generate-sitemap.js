import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/productos', changefreq: 'weekly', priority: 0.8 },
    { url: '/productos-favoritos' },
    { url: '/pedir-cita' },
    { url: '/aviso-legal' },
    { url: '/politica-de-privacidad' },
    { url: '/acuerdo-de-cookies' },
    { url: '/preguntas-frecuentes' }
  ]

  // aquí podrías añadir productos desde tu API
  // const products = await fetchProducts()
  // products.forEach(p => links.push({ url: `/productos/${p.id}-${p.slug}` }))

  const stream = new SitemapStream({ hostname: 'https://bcnmobles.com' })
  const writeStream = createWriteStream('./public/sitemap.xml')
  streamToPromise(stream)
  stream.pipe(writeStream)

  links.forEach(link => stream.write(link))
  stream.end()
}

generateSitemap()

