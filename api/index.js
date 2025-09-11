import { app } from '../dist/ssr/index.js'

// Vercel espera que exportemos una función que maneje (req, res)
export default function handler(req, res) {
  // Delega al Express app que generó Quasar SSR
  app(req, res)
}
