const express = require('express');
const connectDB = require("./models/dbConnection")
const User = require('./models/User');
const Notes = require('./models/Note');
const cors = require('cors')
console.log(process.env.SECRET_JWT_SECRET)


const app = express();
const port = 8000;

//Midleware for parsing JSON
app.use(cors({
    origin:["https://i-note-book-chi.vercel.app"],
    method:["POST","PUT","GET","DELETE"],
    credentials:true
}));
app.use(express.json());

// Routes 
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

connectDB();

app.listen(port,()=>{
    console.log("Server is listening on post 8000")
})
