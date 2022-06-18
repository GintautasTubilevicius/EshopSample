import express from 'express'
import { Items } from './database/connection.js'
import { Daiktai } from './database/connection.js'
import path from 'path'
import session from 'express-session'
import router from './controller/orders.js'


const app = express()

// const port = process.env.PORT || 5000

app.use( express.json() )

//Sesijos priskyrimas prie express objekto
app.use(session({
    secret: 'Xc8BWMjxR5u2hyJaQ2R7UCUXAJeB4jKrXF722RXuumjZEfcD7AHuhCmEYgfCMeQ67J3Tqtumd6Nzf4ZKU9BJ3j9a4TLvFT2KmKrcaBTbdsYVWSYjXd54PRASMxfaX7Zz',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 864000000
    }
}))

//Express konfiguracijos prapletimas norint priimti POST metodu perduodamus duomenis
app.use(express.urlencoded({
    extended: false
}))

app.use('/uploads', express.static('uploads'))

app.use('/eshop', router)

//Titulinis puslapis
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./templates/index.html'))
})



//Login puslapis
app.get('/login', (req, res) => {
    if(req.session.loggedin) {
        res.redirect('/eshop/admin')
        return false
    }
    res.sendFile(path.resolve('./templates/login.html'))
})




app.listen(3000)