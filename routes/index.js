const express = require("express")
const Controller = require("../controllers/controller")
const router = express.Router()
const routerUser = require('./routeruser')
const routeCourse = require('./routecourse')

router.get('/', Controller.home)
router.use('/user', routerUser)
router.use('/course', routeCourse)

module.exports = router