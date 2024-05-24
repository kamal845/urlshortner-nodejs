const express=require('express');
const connectDB=require('./database/database');
const app = express();
app.use(express.json());
const path= require('path');
app.set('view engine','ejs');
port=4000;
try {
    app.listen(port, async (req,res) => {
        try {
            await connectDB();
            console.log("Server is running on port and database is connected", port);
        } catch (error) {
            console.log("Error connecting to the database:", error);
        }
    });
} catch (error) {
    console.log("Error starting the server:", error);
}
app.use('/',require('./routes/route'));