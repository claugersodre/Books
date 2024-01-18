const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        origin: "*"
    })
)
const port = 3001
const router = require("./Routes/router.js")

app.use("/", router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})