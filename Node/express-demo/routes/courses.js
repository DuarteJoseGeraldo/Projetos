import express from "express";
import Joi from "joi";
const router = express.Router();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
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
router.get("/:id", (req, res) => {
  // app.get("/api/courses/:year/:mounth", (req, res) => {
  //   res.send(req.params); //envia um objeto com os parametros para o client
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (course) {
    res.send(course);
  } else {
    return res.status(404).send("Course not found");
  }
});

router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

export { router };
