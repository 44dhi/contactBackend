const dotenv = require('dotenv').config();
const express = require('express');
const connectDb = require('./config/dbConnection');
const cors = require("cors")



const app = express()
const port = process.env.PORT || 3002;
app.use(cors())
app.use(express.json())

connectDb()

app.use('/user', require('./routes/userRoutes'))
app.use('/contacts', require('./routes/contactRoutes'))



app.listen(port, (req, res) => {
  console.log('App running on Port 3002')
})

app.use((err, req, res, next) => {

  res.json({ error: err.message });
});