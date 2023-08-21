// /user/register
// public POST route

const expressAsyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const bcrypt = require('bcrypt');

const registerUser = expressAsyncHandler( async(req, res) => {

  const {first_name, last_name, email, phone_number, profile_image, password} = req.body;

  if(!first_name || !last_name || !email || !phone_number || !password) {
    res.status(400)
    throw new Error('Required params are missing')
  }

  const isUserAvailable = await userModel.findOne({email})


  if(isUserAvailable) {
    res.status(400) 
    throw new Error('User already registered')
  }

  const hashPassword = await bcrypt.hash(password, 10)

  const user = await userModel.create({first_name,last_name,email,phone_number,profile_image, password: hashPassword})

  res.status(201).json(user)
})

module.exports = { registerUser}