import express from "express";
import Joi from "joi";
export const router = express.Router();

const products = [
  { id: 1, name: "bola", price: 10.5 },
  { id: 2, name: "rede", price: 22.7 },
  { id: 3, name: "raquete", price: 35.5 },
  { id: 4, name: "tenis", price: 87.9 },
  { id: 5, name: "oculos", price: 50.0 },
];

//listar todos

router.get("/", (req, res) => {
  res.send(genders);
});

//lista pelo id

router.get("/:id", (req, res) => {
  const gender = genders.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!gender) {
    return res.status(404).send("Gender not found");
  } else {
    res.send(gender);
  }
});

//adicionar novo

router.post("/", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const gender = {
    id: genders.length + 1,
    name: req.body.name,
  };
  genders.push(gender);
  res.send(gender);
});

//atualizar

router.put("/:id", (req, res) => {
  //o genero existe?
  const gender = genders.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!gender) {
    return res.status(404).send("Gender not found");
  } else {
    // validando as entradas
    const schema = {
      name: Joi.string().min(3).required(),
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
      //o result é um objeto com as informações da validação,
      //preciso apenas do detalhe do erro que é uma propriedade dentro do objeto
    } else {
      //se nao existe um erro
      gender.name = req.body.name;
      res.send(genders);
    }
  }
});

// apagar

router.delete("/:id", (req, res) => {
  //o genero existe?
  const gender = genders.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!gender) {
    return res.status(404).send("Gender not found");
  } else {
    genders.splice(genders.indexOf(gender), 1);
    res.send(gender);
  }
});
