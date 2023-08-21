// /contacts
// private GET route
//Get all contacts for an authenticated User

const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

const getAllContacts = expressAsyncHandler(async(req,res) => {

  const contacts = await contactModel.find({ createdBy: req.user.id})
  res.status(200).json(contacts)
})

module.exports = getAllContacts