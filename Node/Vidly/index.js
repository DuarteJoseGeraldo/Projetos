import express from "express";
import Joi from "joi";
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listennig on port ${port}...`));

const genders = [
  { id: 1, name: "Comedy" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
  { id: 4, name: "Documentary" },
  { id: 5, name: "Drama" },
];

//listar todos o generos

app.get("/vidly/genders", (req, res) => {
  res.send(genders);
});

//lista genero especifico

app.get("/vidly/genders/:id", (req, res) => {
  const gender = genders.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!gender) {
    return res.status(404).send("Gender not found");
  } else {
    res.send(gender);
  }
});

//adicionar novo genero

app.post("/vidly/genders", (req, res) => {
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

//atualizar genero

app.put("/vidly/genders/:id", (req, res) => {
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

// apagar um genero

app.delete("/vidly/genders/:id", (req, res) => {
  //o genero existe?
  const gender = genders.find((item) => item.id === parseInt(req.params.id)); //o resultado é retornado em uma string
  if (!gender) {
    return res.status(404).send("Gender not found");
  } else {
    genders.splice(genders.indexOf(gender), 1);
    res.send(gender);
  }
});
