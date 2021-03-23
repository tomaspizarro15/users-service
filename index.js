const app = require('express')()

app.use('*' , (req,res,next) => {

    res.status(200).json({
        message : "Hello from a Docker container"
    })

})
app.listen(8081)