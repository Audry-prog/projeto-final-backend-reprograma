const express = require("express");
const router = express.Router();
const controller = require("../controllers/motoristasController");

router.get("/", controller.getMotoristasByBairro);
router.get("/ativos", controller.getMotoristasAtivos);
router.get("/motoristas", controller.getAll);
router.post("/", controller.postMotorista);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteMotorista);
router.put("/:id", controller.putMotorista);

module.exports = router;