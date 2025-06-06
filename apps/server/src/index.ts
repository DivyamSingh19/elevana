import { Hono } from 'hono'

const app = new Hono()

app.get('/health', (c) => {
  return c.text('API works gal')
})

export default app

