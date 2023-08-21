const express = require('express')
const authCheck = require('../config/authCheck')
const getAllContacts = require('../controllers/contacts/getAllContacts')
const createContact = require('../controllers/contacts/createContact')
const getContactForId = require('../controllers/contacts/getContactForId')
const deleteContactForId = require('../controllers/contacts/deleteContact')
const updateContact = require('../controllers/contacts/updateContact')

const router = express.Router()

router.use(authCheck)
router.get('/', getAllContacts)
router.post('/', createContact) 
router.get('/:id', getContactForId)
router.delete('/:id', deleteContactForId)
router.put('/:id', updateContact)


module.exports = router