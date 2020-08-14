require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {CONNECTION_STRING, SERVER_PORT} = process.env;
const app = express();

app.use(express.json());

massive({connectionString : CONNECTION_STRING, 
    ssl:{rejectUnauthorized: false}
    }).then(db => {app.set('db',db)
    console.log('database is connected')
}).catch(err=> console.log(err))


app.listen (SERVER_PORT, () => console.log(`server listening on port: ${SERVER_PORT}`));