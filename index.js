const app = require('express')()
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods','PUT ,PATCH, DELETE, UPDATE, GET, POST ,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','Content-Type , Authorization')
    next();
})
module.exports = app; 