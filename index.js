const express = require('express');
const app = require('./server');
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`We are LIVE at http://localhost:${port}`)
})