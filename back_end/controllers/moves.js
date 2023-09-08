const router = require("express").Router();
const db = require("../models");

const { Move, Description, User } = db;

router.post("/", async (req, res) => {
  if (!req.body.name) {
    req.body.city = "Any nove";
  }
  if (!req.body.position) {
    req.body.position = "Any Position";
  }
  const move = await Move.create(req.body);
  res.json(move);
});

router.get("./moveId", async (req, res) => {
  let moveId = Number(req.params.placeId);
  if (isNaN(moveId)) {
    res.status(404).json({ message: `Invalid id "${moveId}"` });
  } else {
    const move = await Move.findOne({
      where: { moveId: moveId },
      include: {
        association: "description",
      },
    });
    if (!move) {
      res
        .status(404)
        .json({
          message: `Could not find that move with the id of "${moveId}"`,
        });
    } else {
      res.json(move);
    }
  }
});
