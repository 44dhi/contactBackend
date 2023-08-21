const express = require('express')
const { registerUser } = require('../controllers/user/registerUser')
const loginUser = require('../controllers/user/loginUser')
const { forgotPassword } = require('../controllers/user/forgotPassword')
const expressAsyncHandler = require('express-async-handler')
const authCheck = require('../config/authCheck')
const currentUser = require('../controllers/user/currentUser')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot', forgotPassword)

router.get('/current',authCheck, currentUser)

module.exports = router