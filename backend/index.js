const mssql = require('mssql')
const express = require('express')
const config = require('./config/config')
const app = express()
app.use(express.json())

app.use('/contactUs', require('./Routes/Routes'))

mssql.connect(config).then(pool => {
    if(pool.connecting){
        console.log("Connecting...");
    }
    if(pool.connected){
        console.log("Connected!");
    }
}).catch(e => console.log(e))

const port = 8000;
app.listen(port, () =>
    console.log("Server running...")
)
