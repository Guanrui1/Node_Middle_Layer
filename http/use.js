const express = require('express')
const app = express()
const fs = require('fs')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

let use = require('./index.js')

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/x-www-form-urlencoded')
    next()
})

app.post('/api/apsservice/GetAllWorkCenter', async function (req, res) {
    let data = await use.getAllWorkCenter()
    if (data === undefined) {
        fs.readFile('work.txt', 'utf8', (err, data) => {
            if (err) throw err
            res.send(JSON.stringify(data))
        })
    } else {
        fs.writeFile('work.txt', data, (err) => {
            if (err) throw err
            console.log('work已被保存')
        })
        res.send(JSON.stringify(data))
    }
})

app.post('/api/apsservice/GetMachineGantt', urlencodedParser, async function (req, res) {
    let tempParameter = JSON.parse(req.body[''])
    let data = await use.getMachineGantt(tempParameter.workCenterCode, tempParameter.startTime, tempParameter.endTime, tempParameter.machineSearch)
    if (data === undefined) {
        fs.readFile('machine.txt', 'utf8', (err, data) => {
            if (err) throw err
            res.send(JSON.stringify(data))
        })
    } else {
        fs.writeFile('machine.txt', data, (err) => {
            if (err) throw err
            console.log('machine已被保存')
        })
        res.send(JSON.stringify(data))
    }
})

app.listen(3000)
console.log('Node中间层已启动！')