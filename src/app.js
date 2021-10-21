import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
const app = express()
const port = 3001
const mongoatlasUrl = "mongodb+srv://seiya:juan3137749179@cluster0.zzl0r.mongodb.net/pejelagartodb?retryWrites=true&w=majority"
app.use(express.json())
app.use(cors({ origin: true }))
// routes
app.use(userRoutes);

app.listen(port, async () => {
  try {
    await mongoose.connect(mongoatlasUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  catch (e) {
    console.log("Error de conexión a la DB")
  }
  console.log(`Example app listening at http://localhost:${port}`)
})