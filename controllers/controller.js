const {Course} = require('../models/index')

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
        res.render('formRegister')
    }

    static handlerFormRegister(req, res) {

    }

    static schedule(req, res) {

    }
}

module.exports = Controller