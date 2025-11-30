

const express = require("express");



const app = express();

const port =  3000;


require('dotenv').config();

const connectDB = require('./config/db');

// NEW: Advanced request logger
app.use((req, res, next) =>{
    res.on("finish", ()=>{
        const timestamp = new Date().toISOString();
        console.log(
            `[${timestamp}] IP:${req.ip} Method:${req.method} Path:${req.path} Status:${req.statusCode}`
        );
        
    })
    next();
});

const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

app.use(express.json());
connectDB();



app.use('/api/notes', noteRoutes);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})