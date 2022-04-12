const express = require('express');
const app = express();
const apiRouter = require('./src/routes');
const { logErrors, errorHandler } = require('./src/middlewares/errorHandler');
const db = require('./src/lib/db');
const port = 3000


app.use(express.json()); //middleware
apiRouter(app);
app.use(errorHandler);
app.use(logErrors);


/* const productsRouter = require('./src/routes/products');
app.use('/products', productsRouter); */

app.listen(port, () => {
    console.log('listening on port 3000');

    db.connect().then((result) => {
        console.log('DB connected');
    }).catch((err) => {
        console.log('Connection refused', err);
    });
})