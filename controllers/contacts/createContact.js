
const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");
const generateColor = require("../../config/colorGenerator");

const createContact = expressAsyncHandler(async (req,res) => {
  const {
    first_name,
    last_name,
    email_address,
    phone_number,
    category
  } = req.body


  const createdBy = req.user.id

  if(!first_name || !createdBy) {
    res.status(404)
    throw new Error('First Name and createdBy are required props')
  }

  if(typeof phone_number !== "object") {
    res.status(404)
    throw new Error('Phone Numbers should be of type Array')
  }

  const color = generateColor()
  const contact = await contactModel.create({first_name,last_name,createdBy,email_address,phone_number,category,color})
  res.status(201).json({contact})

})

module.exports = createContact