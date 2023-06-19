const express = require('express')
const router = express.Router()
const Controllers = require('../Controllers/Controllers')

router.post('/', Controllers.createMessage)
router.get('/', Controllers.getMessages)
router.get('/:id', Controllers.getAMessage)
router.put('/:id,', Controllers.updateMessage)
router.delete('/:id', Controllers.deleteMessage)

module.exports = router