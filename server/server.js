const express = require('express')
const mongoose = require('mongoose')

// 链接mongo

// 新建app
const app = express()

app.get('/', function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data', function(req,res){
    res.send({name: 'imooc React app', type: 'IT'})
})

app.listen(9093, function(){
    console.log('Node app start at 9093')
})