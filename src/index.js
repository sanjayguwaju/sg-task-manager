const express = require('express')
require('dotenv').config()
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')
const morgan = require('morgan')



const app = express()
app.use(morgan('combined'))
app.use(express.json())



app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT)
})