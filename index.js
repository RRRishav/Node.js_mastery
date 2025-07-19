// const http = require('http')




// const serevr = http.createServer((req,res)=>{
//   //  res.end('Hello World')
//    if(req.url == '/'){
//      res.end('Home')
//    }

//    if(req.url=='/about'){
//     res.end('about page')
//    }
//    if(req.url == '/profile'){
//     res.end('profile page')
//    }
//    console.log(req.url)
// })

// serevr.listen(3000)
const express = require('express')
const app = express()
const morgan = require('morgan')
const userModel = require('./models/user.js')
const db = require('./config/db.js')
//CUSTOM MIDDLEWARE 


app.use(morgan('dev'))
// app.use((req,res,next)=>{
//     console.log('these is middleware')
//     next()
// })
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

// app.get('/',(req,res,next)=>{
//     const a= 5
//     const b =10

//     console.log(a+b)

//     next()
// },
// (req,res)=>{
//     res.render('index')
// })


app.get('/',(req,res)=>{
    res.render(
       'index'
    )
})


app.get('/register',(req,res)=>{
    res.render('register')
})


app.post('/register',async (req,res)=>{

    const {username , email , password} = req.body;

    const newUser = await userModel.create({
        username:username,
        email:email,
        password:password
    })

    console.log(req.body)
    res.send(newUser)
})



app.get('/get-users',(req,res)=>{
    userModel.find()
    .then((users)=>{
        res.send(users)
    })
})

app.get('/about',(req,res)=>{
    res.send('About page ')
})

app.get('/profile',(req,res)=>{
    res.send('profile page ')
})


app.post('/get-data',(req,res)=>{
    console.log(req.body)
    res.send('data-received')
})

db()
app.listen(3000,()=>{
    console.log('server is started at 3000')
})


