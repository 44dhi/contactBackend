// /user/login
// public POST route

const expressAsyncHandler = require("express-async-handler");
const userModel = require("../../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const loginUser = expressAsyncHandler( async(req, res) => {
  const {email, password} = req.body

  if(!email || !password) {
    res.status(400)
    throw new Error('Either of your credentials are missing')
  }

  const user = await userModel.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {

    const accessToken = jwt.sign({
      user: {
        id: user?._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number:user.phone_number,
        profile_image: user.profile_image
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '90d'
    })

    res.status(200).json({
      accessToken: accessToken
    })

  } else {
    res.status(401)
    throw new Error('Invalid Credentials/ User does not exist')
  }

})

module.exports = loginUser