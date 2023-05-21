const express = require("express");
const programeController = require("../controllers/programe.controller");
const router = express.Router();


router.post("/apply", programeController.programeApply);

// router.post("/login", userController.login);
// router.get("/me", userController.getMe);

module.exports = router;