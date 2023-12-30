import express from "express"
import connectDB from "./db/connectDB.js"
import checkScheduledTasks from "./worker.js"

const app = express()

await connectDB()

setInterval(checkScheduledTasks, 1000 * 60);

app.listen(8000, ()=> {

    console.log("Server is running on port 8000")

})
