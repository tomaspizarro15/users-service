const express = require('express'); 
const Router = express.Router(); 

const controller = require('./controller')

Router.get('/get-all' , controller.getAll);
Router.get('/get/:id' , controller.getById);
Router.get('/get/search?q=' , controller.getByFilter);
Router.post('/post' , controller.post);
Router.put('/put' , controller.put);

module.exports = Router; 