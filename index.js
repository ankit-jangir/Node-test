const express = require('express')
require('./src/confic')
const port = 7999
const app = express()
app.use(express.json())
app.listen(port, () => {
    console.log(`server is connected ${port}`);
})