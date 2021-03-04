import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3003

app.use(bodyParser.json())
app.use(cors({ origin: true }))

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        response: "ok 200"
    })
})


app.listen(port, () => {
    console.log(`Start server at port ${port}.......`)
})
