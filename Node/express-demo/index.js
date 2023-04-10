//nodemon -> faz o processo ficar em loop e executar a cada save
import config from "config";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import { logger } from "./logger.js";
import { router as courses } from "./routes/courses.js";
import { router as home } from "./routes/home.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);
app.use(logger);

//Configuration
console.log("Aplication Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled");
}

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listennig on port ${port}...`));
