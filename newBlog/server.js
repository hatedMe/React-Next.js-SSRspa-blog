const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const server = new Koa();

const port = parseInt(process.env.PORT, 10) || 5000
const dev = process.env.NODE_ENV !== 'development'

const app = next({dev});

const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const router = new Router()
        router.get('*', async ctx => {
            await handle(ctx.req, ctx.res)
            ctx.respond = false
        })
        server.use(async(ctx, next) => {
            ctx.res.statusCode = 200
            await next()
        })

        server.use(router.routes());

        server.listen(port, (err) => {
            if (err) 
                throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })