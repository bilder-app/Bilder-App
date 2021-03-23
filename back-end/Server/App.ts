import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import sequelize from "./Index";
import bodyParser from "body-parser";

const {
  PORT
} = process.env;

const server = express();

// ---- MIDDLEWARE --------

server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Sequelize connected successfully");
  })
  .catch((e) => console.error("Error when starting DB: ", e));

server.listen(PORT, () => {
  console.log("Server successfully started on port:", PORT);
});