// /contacts
// private GET route
//Get contact for id for an authenticated User


const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

const getContactForId = expressAsyncHandler( async (req,res) => {

  const id = req.params.id
  const contact = await contactModel.findById({_id: id, createdBy: req.user.id})

  if(!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  res.status(200).json(contact)
})

module.exports = getContactForId