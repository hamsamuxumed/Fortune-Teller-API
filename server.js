
const express = require('express');

const app = express();

class FortuneTeller {
    constructor(name){
        this.name = name;
    }
}

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

module.exports = app;
