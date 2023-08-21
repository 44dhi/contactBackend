// /current GET
//returns current user

const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

const currentUser = expressAsyncHandler(async (req, res) => {
  
  const createdContacts = await contactModel.find({createdBy: req.user.id})

  res.status(200).json({
    ...req.user,
    contacts: createdContacts
  })
})

module.exports = currentUser