const jwt = require('./src/lib/jwt');

jwt
    .verify()
    .then((token) => {
        console.log('The token is:', token);
    })