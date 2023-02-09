const express = require("express")
const Controller = require("../controllers/controller")
const router = express.Router()

router.get('/', Controller.renderLogin)
router.get('/course', Controller.course)
router.get('/course/form', Controller.renderFormRegister)
router.post('/course/form', Controller.handlerFormRegister)

module.exports = router