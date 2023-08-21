const { default: mongoose } = require("mongoose");


const contactModel = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First name missing in key']
  },
  last_name: {
    type: String,
    required: false,
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'No id provided'],
    ref: "User"
  },
  email_address: {
    type: String, 
    required: false
  },
  phone_number: {
    type: Array,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: [true, 'Please add a color for the avatar component default']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Contact', contactModel)