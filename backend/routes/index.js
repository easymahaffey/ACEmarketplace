let express = '../../server/node_modules/express'
const router = require(express).Router()
const authRoutes = require("./authRoutes")
const appRoutes = require("./appRoutes")

router.use("/auth", authRoutes)
router.use("/items", appRoutes)

module.exports = router