const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');
const apiRouter = (app) => {
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
}
module.exports = apiRouter;