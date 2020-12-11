const express = require("express");
const router = express.Router();
const controller = require("../controllers/motoristasController");

router.get("/", controller.getMotoristasByBairro);
router.get("/cidade", controller.getMotoristasByCidade);
router.get("/cidade/ativos", controller.getMotoristasByCidadeByAtivos); //
router.get("/horarios", controller.getMotoristasByHorario,)
router.get("/ativos", controller.getMotoristasAtivos);
router.get("/motoristas", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postMotorista);
router.delete("/:id", controller.deleteMotorista);
router.put("/:id", controller.putMotorista);

module.exports = router;