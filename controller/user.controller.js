const User = require('../models/user.model')
const Token = require('../models/token.model')

class UserController{
    async createUser(req,res) {
        const {username, password} = req.body
        const newUser = new User ({
            username,
            isActive:true
        })
        await newUser.save()
        console.log(newUser._id);
        const token = new Token({
            id: newUser._id,
            username,
            password
        })
        await token.save()
        console.log(token)
        res.json(newUser)

    }
    async getUsers(req,res) {
        const users = await User.find()
        console.log(users);
        res.json(users)
    }
    async getUserById(req,res) {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    }
    async updateUserById(req,res) {
        const {id,username,isActive,isSuperUser} = req.body
        const user = await User.findByIdAndUpdate(id, {
            username,
            isActive,
            isSuperUser
        },res.json(user))
    }
    async deleteUserById(req,res) {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.json(user)
        
    }
}

module.exports = new UserController()