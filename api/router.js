const express = require('express'); 
const Router = express.Router(); 

const controller = require('./controller')

Router.get('/get-all' , controller.getAll);


module.exports = Router; 