const { default: mongoose } = require("mongoose");


const userModel = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First Name is invalid or empty']
  },
  last_name: {
    type: String,
    required: [true, 'Last Name is invalid or empty']
  },
  email: {
    type: String,
    required: [true, 'Email is invalid or empty']
  },
  phone_number: {
    type: String,
    required: [true, 'Phone Number is invalid or empty']
  },
  profile_image: {
    type: String,
    required: [false, 'Image string is empty']
  },
  password: {
    type: String,
    required: [false, 'Password is empty']
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userModel)