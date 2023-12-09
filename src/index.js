const express = require("express");
const { config } = require("./config");
const boom = require("@hapi/boom");
const cors = require("cors");

const criterioApi = require("./routes/criterio.routes");
const nivelhallazgoApi = require("./routes/Nivelhallazgo.routes");
const origenhallazgoApi = require("./routes/origen.routes");
const procesoApi = require("./routes/proceso.routes");
const hallazgoApi = require("./routes/hallazgo.routes");
const userApi = require("./routes/user.routes");

// middlewares
const {
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({
      status: true,
      message: "API REST - StartSIG",
    });
  } catch (err) {
    res.status(500).json(boom.badData("error:" + err.message));
  }
});

criterioApi(app);
userApi(app);
nivelhallazgoApi(app);
origenhallazgoApi(app);
procesoApi(app);
hallazgoApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => console.log("http://localhost:" + config.port));
