import "dotenv/config"
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { gamesRouter } from "./src/routes/GamesRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", gamesRouter)

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected!'));

app.listen(process.env.PORT, () => {
    console.log(`Example gamesRoute listening on port ${process.env.PORT}`)
})