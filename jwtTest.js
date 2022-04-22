const jwt = require('./src/lib/jwt');
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjYxYzA1ODA4ZjA0Y2FjY2M1ODczYzkiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjUwNTg0NDYxLCJleHAiOjE2NTA1ODgwNjF9.b1B8FrS-sDxZ6_NebXA6_dbQ3zd3L6QAOVQzZB-qyGg"
jwt.verify(token).then((payload) => {
    console.log('The token is:', payload);
})