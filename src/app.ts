import express, { Express } from "express";
import { router } from "./routers/book_router";
import bodyParser from "body-parser";

const app: Express = express()
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use("/books", router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
