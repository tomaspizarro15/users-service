const { } = require('express-validator')
const axios = require('axios')
module.exports.getAll = async (req, res, next) => {

        const result = await axios.get("https://randomuser.me/api/")
        console.log(result.data)
        res.status(200).json({
            message: "Get all",
            status: result.status,
            path: "users/get-all",
            data : result.data,
            method: result.url,
        })

}
