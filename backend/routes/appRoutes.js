let express = '../../server/node_modules/express'
const router = require(express).Router()
const controller = require("../controllers")

router.route("/").post(controller.getItems)
router.route("/add_item").post(controller.addItem)
router.route("/delete_item").post(controller.deleteItem)
router.route("/update_item").post(controller.updateItem)
// console.log("TEST ROUTE ", router.route("/upload_photo").post(controller.uploadPhoto))
router.route("/upload_photo").post(controller.uploadPhoto)
router.route("/update_item").post(controller.updateItem)
router.route("/deleteuser").post(controller.deleteUser)


module.exports = router