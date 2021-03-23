const router = require('./../api/router')
const app = require('./../index')

app.use('/users' , router)

app.listen(8080)