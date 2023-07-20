const express = require("express")

const {home} = require("../config/controllers/usercontroller")

const router= express.Router();

router.get("/",home)


module.exports = router