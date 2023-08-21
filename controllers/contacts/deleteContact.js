// /contacts/:id
// private DELETE route
//Delete contact for id for an authenticated User

const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");

const deleteContactForId = expressAsyncHandler( async(req,res) => {
  const id = req.params.id

  const contact = await contactModel.findById(id)

  if(!contact) {
    res.status(404)
    throw new Error('User does not exist')
  }

  if(!contact.createdBy == req.user.id) {
    res.status(403)
    throw new Error('You do not have the access to delete this user')
  }

  const deletedContact = await contactModel.findByIdAndDelete(id)

  res.status(200).json(deletedContact)
  

})

module.exports = deleteContactForId