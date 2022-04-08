const express = require('express');
const app = express();
const port = 3000

app.use(express.json()); //middleware

app.post("/", (req, res) => {
    console.log(req.body);

    res.json({
        message: ' object created',
        succes: true,
        payload: req.body,
        process: req.body.age * 10
    })

})
app.get('/', (req, res) => {
    console.log('request', req.body);

    res.json({
        message: 'hello world',
        status: 'ok',
        data: {
            data: req.query
        }
    })
})
app.get("/home", (req, res) => {
    res.send('hello home')
})
app.listen(port, () => {
    console.log('listening on port 3000');
})