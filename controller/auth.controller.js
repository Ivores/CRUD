const Token = require('../models/token.model')

class AuthController{
    async tokenAuth(req,res) {
        const {username, password} = req.body

        const token = await Token.findOne(
            {
                username,
                password
            }
           
        )
        const authToken = `${token.username}.${token.id}`
        console.log(token)
        res.json(authToken)

    } 
}


module.exports = new AuthController()