const express = require("express");
const router = express.Router();

const UserController = require("./src/app/controllers/UserController");

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/store", UserController.store);
router.delete("/delete/:id", UserController.delete);
router.put("/users/:id", UserController.update);

module.exports = router;
