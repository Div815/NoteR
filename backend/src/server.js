import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/db.js' 
import 'dotenv/config'
import rateLimiter from './Middleware/rateLimiter.js'
import cors from 'cors'
const app=express()

const PORT = process.env.PORT || 5001
//Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json())
app.use(rateLimiter) // Apply the rate limiter middleware to all routes

app.use((req,res,next)=>{
    console.log(`the request method is ${req.method} and the url is ${req.url}`)
    next(); 
})
app.use("/api/notes",notesRoutes)
connectDB().then(()=>{
app.listen(PORT,()=>{ console.log(`Server is running on port ${PORT}`) })

})

