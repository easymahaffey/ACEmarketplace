let express = '../../server/node_modules/express'
const router = require(express).Router()
const controller = require("../controllers")

router.route("/login")
    .post(controller.login)

router.route("/register")
    .post(controller.register)

router.route("/update")
    .post(controller.updateUser)

router.route("/logout")
    .post(controller.logout)

module.exports = router