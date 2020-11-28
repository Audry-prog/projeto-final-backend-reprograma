const express = require("express");
const router = express.Router();
const controller = require("../controllers/motoristasController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postmotorista);
router.delete("/:id", controller.deleteMotorista);
router.put("/:id", controller.putMotorista);

module.exports = router;