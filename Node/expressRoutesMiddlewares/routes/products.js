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
  res.send(products);
});

//selecionar pelo id

router.get("/:id", (req, res) => {
  const product = products.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!product) {
    return res.status(404).send("Product not found");
  } else {
    res.send({
      name: product.name,
      price: product.price,
    });
  }
});

//adicionar novo

router.post("/", (req, res) => {
  const schema = {
    name: Joi.string().min(2).required(),
    price: Joi.number().required(),
  };
  const result = Joi.validate(req.body, schema);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const product = {
    // id: products.length + 1,
    /*se fizer dessa forma quando
    apaga um produto no meio o id do proximo adicionado fica repetido/igual ao penultimo*/
    id: products[products.length - 1].id + 1, //pega o id do ultimo e soma mais 1
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  res.send(product);
});

//atualizar

router.put("/:id", (req, res) => {
  //o produto existe?
  const product = products.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!product) {
    return res.status(404).send("Product not found");
  } else {
    // validando as entradas
    const schema = {
      name: Joi.string().min(2).required(),
      price: Joi.number().required(),
    };
    const result = Joi.validate(req.body, schema);

    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
      //o result é um objeto com as informações da validação,
      //preciso apenas do detalhe do erro que é uma propriedade dentro do objeto
    } else {
      //se nao existe um erro
      product.name = req.body.name;
      product.price = req.body.price;
      res.send(product);
    }
  }
});

// apagar

router.delete("/:id", (req, res) => {
  //o genero existe?
  const product = products.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!product) {
    return res.status(404).send("Product not found");
  } else {
    products.splice(products.indexOf(product), 1);
    res.send(product);
  }
});
