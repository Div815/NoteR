import express from 'express'
import notesRoutes from './routes/notesRoutes.js'

const app=express()

app.use("/api/notes",notesRoutes)

app.listen(5001,()=>{ console.log('Server is running on port 5001') })

// mongodb+srv://vdivyesh821_db_user:VjDuzQwuAvc5RQH6@cluster0.d0zctnx.mongodb.net/?appName=Cluster0