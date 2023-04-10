//nodemon -> faz o processo ficar em loop e executar a cada save
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import Joi from "joi";
import logger from "./logger";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));
app.use(logger);

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// :id é um parametro do endpoint, pode ser nomeado de difrentes formas pra diferentes funções
app.get("/api/courses/:id", (req, res) => {
  // app.get("/api/courses/:year/:mounth", (req, res) => {
  //   res.send(req.params); //envia um objeto com os parametros para o client
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (course) {
    res.send(course);
  } else {
    return res.status(404).send("Course not found");
  }
});

app.put("/api/courses/:id", (req, res) => {
  //o curso existe
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //validate
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  //update
  course.name = req.body.name;
  res.send(course);
});
app.delete("/api/courses/:id", (req, res) => {
  //procurar
  //se nao existe, err 404
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!course) {
    return res.status(404).send("Course not found");
  }
  //delete
  const index = courses.indexOf(course);
  courses.splice(index, 1); //remove um elemento a partir daquele index

  //retorna o deletado

  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listennig on port ${port}...`));
