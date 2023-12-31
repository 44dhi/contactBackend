const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const authCheck = expressAsyncHandler( async(req, res, next) => {
  let token;
  let authHeader = req.headers.authorization

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if(err) {
        res.status(403)
        throw new Error('Invalid Session Token')
      }
      req.user = decoded.user
      next()
    })

    if(!token) {
      res.status(401)
      throw new Error('Token missing in request')
    }
  } else {
    res.status(401)
    throw new Error('No token in request')
  }
})

module.exports = authCheck