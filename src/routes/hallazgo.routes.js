const express = require("express");
const HallazgoService = require("../services/hallazgo.service");
const boom = require("@hapi/boom");
const { json } = require("sequelize");

function hallazgoApi(app) {
  const router = express.Router();
  app.use("/hallazgos", router);

  const objHallazgo = new HallazgoService();
  router.get("/", async function (req, res) {
    try {
      const data = await objHallazgo.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(boom.badData("error" + err.message));
    }
  });

  router.post("/", async function (req, res) {
    try {
      const body = req.body;
      const data = await objHallazgo.create(body);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json(boom.badData(err));
    }
  });

  router.get("/:id", async function (req, res) {
    try {
      const { id } = req.params;
      const data = await objHallazgo.findOne(id);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(boom.badData(err));
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await objHallazgo.update(id, body);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json(boom.badData(err));
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await objHallazgo.delete(id);
      if (data) {
        res.sendStatus(201);
      }
    } catch (err) {
      res.status(500).json(boom.badData(err));
    }
  });
}
module.exports = hallazgoApi;
