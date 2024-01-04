require('dotenv').config()
const express= require('express')
const workoutRoute= require('./route/workout')
const mongoose=require('mongoose')

//express app
const app=express()


//middle ware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// route
app.use('/api/workouts',workoutRoute)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //lsiten for request
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening to request on port 4000');
        })

    })
    .catch(err => console.log(err))

