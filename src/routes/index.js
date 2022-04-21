const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');
const authRouter = require('./auth')
const apiRouter = (app) => {
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
    app.use('/auth', authRouter)
}
module.exports = apiRouter;