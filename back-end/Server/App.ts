import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import sequelize from "./Index";
import bodyParser from "body-parser";
import router from "./router";

const { PORT = 5000 } = process.env;

const server = express();

// ---- MIDDLEWARE --------

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", router);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sequelize connected successfully");
  })
  .catch((e) => console.error("Error when starting DB: ", e));

server.listen(PORT, () => {
  console.log("Server successfully started on port:", PORT);
});
