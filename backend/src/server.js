import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/db.js' 
import 'dotenv/config'
import rateLimiter from './Middleware/rateLimiter.js'
import cors from 'cors'
import path from 'path'

const app=express()

const allowedOrigins = [
  'http://localhost:5174',                // Your local Vite/React port
  'https://noter-cnrz.onrender.com'       // Your live Render frontend
];

const __dirname=path.resolve();

const PORT = process.env.PORT || 5001
//Middleware
if (process.env.NODE_ENV !== "production"){


app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy mismatch'), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
}

app.use(express.json())
app.use(rateLimiter) // Apply the rate limiter middleware to all routes

app.use((req,res,next)=>{
    console.log(`the request method is ${req.method} and the url is ${req.url}`)
    next(); 
})
app.use("/api/notes",notesRoutes)

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
} );
}


connectDB().then(()=>{
app.listen(PORT,()=>{ console.log(`Server is running on port ${PORT}`) })

})

