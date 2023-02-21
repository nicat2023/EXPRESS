import express, { application }  from "express";
import users from "./users.js";
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('this is home page')
})


app.get('/users',(req, res)=>{
res.send(users)
})

app.get('/users/:id',(req, res)=>{
    console.log(req.params)
    const user = users.find(({id})=>id===  +req.params.users.id )
    res.send(user)
    })

    app.post('/users',(req,res)=>{
        const newUser = req.body
        users.push(newUser)
        res.status =204
        req.end("new user has been created")
    })


app.listen(5000,()=>{
    console.log('server is up...')
})