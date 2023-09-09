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
  let moveId = Number(req.params.moveId);
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
      res.status(404).json({
        message: `Could not find that move with the id of "${moveId}"`,
      });
    } else {
      res.json(move);
    }
  }
});

router.put("/moveId", async (req, res) => {
  let moveId = Number(req.params.moveId);
  if (isNaN(moveId)) {
    res.status(404).json({ message: `invalid id "${moveId}"` });
  } else {
    const move = await Move.findOne({
      where: { moveId: moveId },
    });
    if (!move) {
      res
        .status(404)
        .json({ message: `Could not find move with ID "${moveId}"` });
    } else {
      Object.assign(move, req.body);
      await move.save();
      res.json(move);
    }
  }
});

router.delete("/moveId", async (req, res) => {
  let moveId = Number(req.params.moveId);
  if (isNaN(moveId)) {
    res.status(404).json({ message: `invalid id "${moveId}"` });
  } else {
    const move = await Move.findOne({
      where: { moveId: moveId },
    });
    if (!move) {
      res
        .status(404)
        .json({ message: `Could not find that move with ID "${moveId}"` });
    } else {
      await move.destroy();
      res.json(move);
    }
  }
});

router.post("/:moveId/description", async (req, res) => {
  const moveId = Number(req.params.moveId);

  req.body.submission = req.body.submission ? true : false;

  const move = await Move.findOne({
    where: { moveId: moveId },
  });

  if (!move) {
    res
      .status(404)
      .json({ message: `could not find that move with the id of "${moveId}"` });
  }

  const description = await Description.create({
    ...req.body,
    moveId: moveId,
  });

  res.send({
    ...description.toJSON(),
  });
});

router.delete("/:moveId/description/:descriptionId", async (req, res) => {
  let moveId = Number(req.params.moveId);
  let descriptionId = Number(req.params.descriptionId);

  if (isNaN(moveId)) {
    res.status(404).json({ message: `invalid id "${moveId}` });
  } else if (isNaN(descriptionId)) {
    res.status(404).json({ message: `invalid id "${descriptionId}"` });
    const description = await Description.findOne({
      where: { descriptionId: descriptionId },
    });
    if (!not) {
      res.status(404).json({
        message: `Could not find that description with ID "${descriptionId}"`,
      });
    } else {
      await description.destroy();
      res.json(description);
    }
  }
});

module.exports = router;
