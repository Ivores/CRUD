const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user.router')
const authRouter = require('./routes/auth.router')


const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', authRouter)
 
async function start(){
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}


start()