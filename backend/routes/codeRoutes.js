const express = require("express");
const router = express.Router();

const { runCode, saveProgram, getPrograms, deleteProgram } = require("../controllers/codeController");

router.post("/run", runCode);

router.post("/saveProgram", saveProgram);

router.get("/programs", getPrograms);

router.delete("/programs/:id", deleteProgram);

module.exports = router;