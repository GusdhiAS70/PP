const express = require("express")
const Controller = require("../controllers/controller")
const router = express.Router()

// router.get('/', Controller.home)
router.get('/course', Controller.course)
router.get('/course/form', Controller.renderFormRegister)
router.post('/course/form', Controller.handlerFormRegister)
router.get('/course/schedule', Controller.schedule)


module.exports = router