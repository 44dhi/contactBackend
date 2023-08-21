// /contacts/:id
// private PUT route
//Update contact for id for an authenticated User

const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../../models/contactModel");


const updateContact = expressAsyncHandler( async (req,res) => {
  const id = req.params.id
  const contact = await contactModel.findOne({_id: id, createdBy: req.user.id})

  if(!contact) {
    res.status(404)
    throw new Error('Contact not found')
  }

  const updatedContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )

  res.status(201).json(updatedContact)

})

module.exports = updateContact