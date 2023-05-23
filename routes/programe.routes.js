const express = require("express");
const Programe = require('../models/Programe'); 
const programeController = require("../controllers/programe.controller");
const { getAllProgrameService } = require("../services/programe.service");
const router = express.Router();


router.post("/apply", programeController.programeApply)

router.get("/applications", programeController.getAllPrograms);



module.exports = router;