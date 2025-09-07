const express= require("express")
const fs= require("fs")
const users = require('./MOCK_DATA.json')
const app= express()
const PORT = 8000;

app.use(express.json());

//middleware- plugin
app.use(express.urlencoded({extended:false}))
//ROUTES
app.get('/users', (req,res)=> {
    return res.json(users)
})

app.get('/api/users', (req,res)=> {
    return res.json(users)
})

app
.route('/api/users/:id')
.get((req,res)=> {
    const id = Number (req.params.id)
    const user=users.find((user)= user.id===id)
    return res.json(user);
})
.patch((req,res)=> {
    //TODO: edit the user with id
    res.json({status: 'pending'})})
.delete((req,res)=> {
    //TODO: delete the user with id
    res.json({status: 'pending'})
})



app.post('/api/users', (req,res)=> {
    const body=req.body;
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        res.json({status: 'success', id:  users.length})
    })
    
})

app.patch('/api/users/:id', (req,res)=> {
    
    res.json({status: 'pending'})
})


app.listen(PORT, ()=> console.log(`Server started at PORT ${PORT}`))