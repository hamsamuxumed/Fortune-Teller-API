const express = require('express');

const app = express();
app.use(express.json());

class FortuneTeller {
    constructor(name){
        this.name = name;
    }
}