const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", updateGoals);

router.delete("/:id", deleteGoals);

module.exports = router;
