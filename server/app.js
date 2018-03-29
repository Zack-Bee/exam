const express = require("express"),
    path = require("path"),
    fs = require("fs"),
    app = express(),
    hidePoweredBy = require("hide-powered-by"),
    bodyParser = require("body-parser"),
    jsonParser = bodyParser.json(),
    textParser = bodyParser.text(),
    cookieParser = require("cookie-parser"),
    users = require("./user.json")

// function hasThisUser(users, user, password) {
// let result = false
// for (let userInfo of users) {
// if (userInfo.user === user && userInfo.password === password) {
// return true
// }
// }
// 
// return false
// }

app.use(hidePoweredBy())

// css等文件长时间缓存
app.use("/", express.static(path.resolve(__dirname, "../dist"), {
    maxAge: 365 * 24 * 60 * 60, // 缓存一年
    etag: false
}))

// 访问首页发送html
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"))
})

// 提供files列表
app.get("/files", (req, res) => {
    console.log(req.url)
    fs.readdir(path.resolve(__dirname, "../files"), (err, files) => {
        if (err && (err.errno == -2)) {
            console.log(typeof err.errno)
            fs.mkdirSync(path.resolve(__dirname, "../files"))
            res.json([])
        } else {
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(files))
        }
    })
})

// 提供files中的文件
app.use("/files", express.static(path.resolve(__dirname, "../files")))

// 上传文件
app.put("/files", jsonParser, cookieParser(), (req, res) => {
    console.log(req.body)
    console.log(req.cookies)
    if (users.includes(req.cookies.user)) {
        console.log("put file")
        console.log(typeof req.body)
        // let files = []
        let files = req.body.index
        // for (let i in req.body) {
            // files.push(req.body[i])
        // }
        console.log(files)
        files.forEach((fileInfo) => {
            fs.writeFileSync(
                path.resolve(__dirname, "../files", fileInfo.fileName),
                JSON.stringify(fileInfo.questions)),
                (err) => {
                    if (err) {
                        res.sendStatus(403)
                    } else {
                        res.sendStatus(200)
                    }
                }
        })
        res.sendStatus(200)        
    } else {
        res.sendStatus(401)
    }
})

app.delete(/\/files\/.+/, (req, res) => {
    let url = decodeURIComponent(req.url)
    console.log(url.slice(7))
    fs.unlink(path.resolve(__dirname, "../files", url.slice(7)), (err) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.sendStatus(200)
        }
    })
})

// 登录
app.post("/login", textParser, (req, res) => {
    console.log(req.body)
    if (users.includes(req.body)) {
        console.log("login in")

        // 登录状态保存4小时
        // res.cookie("user", req.body.user, { maxAge: 4 * 60 * 60 * 1000 })
        // res.cookie("password", req.body.user, { maxAge: 4 * 60 * 60 * 1000 })
        res.cookie("user", req.body)
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
})

app.listen(3000)