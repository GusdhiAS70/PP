const {Course, Schedules} = require('../models/index')

class Controller {
    static renderLogin(req, res) {
        res.render('login')
    }

    static renderRegister(req, res) {

    }

    static handlerRegister(req, res) {

    }

    static course(req, res) {
        Course.findAll()

        .then(data => {
            // console.log(data);
            res.render('course', {data})
        })

        .catch(err => {
            console.log(err, "<<<<<");
            res.send(err)
        })
    }

    static renderFormRegister(req, res) {
        // Schedules.findAll()
        res.render('formRegister')
    }

    static handlerFormRegister(req, res) {
        let {name, duration, category, email} = req.body
        // let data = req.body
        // console.log(data);
        Schedules.create({
            name: name,
            duration: duration,
            category: category,
            email: email
        })

        .then(data => {
            res.redirect('/course')
        })

        .catch(err => {
            // console.log(err, "<<<<")
            res.send(err)
        })
    }

    static schedule(req, res) {
        res.render('schedule')
    }
}

module.exports = Controller