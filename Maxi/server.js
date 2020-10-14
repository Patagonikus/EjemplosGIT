const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
function buscarUsuario(req, res){
    res.json({usuario : 'Maxi'})
}

function loginUsuario(req, res){
    const { usuario, password } = req.body 
    res.status(200).json({ usuario: usuario, password: password })
}

app.get('/user' , buscarUsuario)
app.post('/login', loginUsuario)


const server = app.listen(4001, function(){
    console.log('server escuchando puertos 4 mil')
})
