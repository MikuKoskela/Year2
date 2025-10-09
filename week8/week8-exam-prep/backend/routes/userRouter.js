const express = require("express")
const {SignupUser, LoginUser} = require("../controllers/userController")
const router = express.Router()

router.post("/signup",SignupUser)
router.post("/login",LoginUser)
module.exports=router