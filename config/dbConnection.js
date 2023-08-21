const mongoose = require('mongoose')

const connectDb = async() => {
  console.log('Establishing Connection')
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('DB Connected', connect.connection.host)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

module.exports = connectDb