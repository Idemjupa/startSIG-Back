const express = require("express");
const OrigenService = require("../services/origen.service");
// const validatorHandler = require("../middlewares/validator.handler");
// const { criterioSchema } = require("../schemas/cirterio.schema");
// const { verifyToken } = require("../middlewares/auth.handler");

function criterioApi(app) {
  const router = express.Router();
  app.use("/origenes", router);
  const objOrigen = new OrigenService();

  router.get("/", async function (req, res) {
    try {
      const data = await objOrigen.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });

  router.get("/:id", async function (req, res) {
    const { id } = req.params;
    try {
      const data = await objOrigen.getByID(id);
      res.status(200).json(data);      
    } catch (err) {
      console.log(err);
    }
  });

  router.post(
    "/",
    // verifyToken, 
    // validatorHandler(criterioSchema, "body"),
    async function (req, res) {
      const { body: data } = req;
      try {
        const newData = await objOrigen.create({ data });
        res.status(201).json(newData[0]);
      } catch (err) {
        console.log(err);
      }
    }
  );

  router.put("/:id", async function (req, res) {
    const { id } = req.params;
    const { body: data } = req;
    try {
      const updateData = await objOrigen.update({ data, id });
      console.log(updateData[0])
      if (updateData.length > 0) res.status(201).json(updateData[0]);
      else res.status(201).json();
    } catch (err) {
      console.log(err);
    }
  });

  router.delete("/:id", async function (req, res) {
    const { id } = req.params;
    try {
      const deleteData = await objOrigen.delete(id);
      if (deleteData) res.status(201).json({ message: "registro eliminado" });
      else res.status(204).json();
    } catch (err) {
      console.log(err);
    }
  });
}
module.exports = criterioApi;
