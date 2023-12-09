const express = require("express");
const UserService = require("../services/user.service");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

function userApi(app) {
  const router = express.Router();
  app.use("/user", router);
  const objUser = new UserService();

  router.get("/", async function (req, res) {
    try {
      const data = await objUser.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });

  router.post("/", async function (req, res) {
    const { body: data } = req;
    try {      
      const newData = await objUser.create({ data });
      res.status(201).json(newData);
    } catch (err) {
      res.status(500).json(boom.badData(err));
    }
  });

  router.put("/:id", async function (req, res) {
    const { id } = req.params;
    const { body: data } = req;
    try {
      const updateData = await objUser.update({ data, id });
      if (updateData.length > 0) res.status(201).json(updateData[0]);
      else res.status(201).json();
    } catch (err) {
      console.log(err);
    }
  });

  router.delete("/:id", async function (req, res) {
    const { id } = req.params;
    try {
      const deleteData = await objUser.delete(id);
      if (deleteData) res.status(201).json({ message: "registro eliminado" });
      else res.status(204).json();
    } catch (err) {
      console.log(err);
    }
  });


  router.post("/login", async function (req, res) {
    const { body: data } = req;
    const auth = await objUser.authenticate({ data });
    console.log(auth)
    if (auth.id > 0) {
      const token = jwt.sign(auth, config.jwt_secret, { expiresIn: "60m" });
      res.status(200).json({ 
        login: auth.login,
        token: token
       });
    } else {
      res.status(400).json({ message: "datos invalidos" });
    }
  });
}

module.exports = userApi;
