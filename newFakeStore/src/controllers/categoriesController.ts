import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Categorie = {
  id?: number;
  name: string;
};

export default { insert, index, show, update, remove };
