const express = require('express');
const port = process.env.PORT || 2000;
const app = express();


app.listen(port, () => {
    console.log(`We are LIVE at http://localhost:${port}`)
})