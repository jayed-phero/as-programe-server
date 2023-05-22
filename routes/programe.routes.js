const express = require("express");
const programeController = require("../controllers/programe.controller");
const { getAllProgrameService } = require("../services/programe.service");
const router = express.Router();


router.post("/apply", programeController.programeApply)

router.get("/", programeController.getAllPrograms);



module.exports = router;