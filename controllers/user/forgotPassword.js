// /user/forgot
// public POST route

const expressAsyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const bcrypt = require('bcrypt');


const forgotPassword = expressAsyncHandler( async (req, res) => {
  const {email, password} = req.body

  if(!email || !password) {
    res.status(400)
    throw new Error('Credentials not provided to reset password')
  }

  const isUserAvailable = await userModel.findOne({email})

  if(!isUserAvailable) {
    res.status(400)
    throw new Error('User does not exist')
  }

  if(await bcrypt.compare(password, isUserAvailable.password)) {
    res.status(400)
    throw new Error('New password cannot be the old password')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const updatePassword = await userModel.findOneAndUpdate({email}, {password: hashedPassword}, { new: true})

  res.status(201).json({
    message: 'Password has been updated'
  })
})

module.exports = {forgotPassword}