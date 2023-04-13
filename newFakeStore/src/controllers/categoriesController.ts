import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Category = {
  id?: number;
  name: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await knexInstance("categories").select(
      "categories.name"
    );

    res.status(200).json(categories);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category: Category[] = await knexInstance("categories")
      .select("categories.name")
      .where({ "categories.id": id });

    if (!category.length) throw new Error("Essa categoria não existe");

    res.status(200).json(category[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: name });

    if (findCategory[0]) {
      throw new Error("Categoria ja existe");
    }

    const idNewCategorie: number[] = await knexInstance("categories").insert({
      name,
    });
    res.status(201).json({
      id: idNewCategorie[0],
      name,
    });
  } catch (error) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const updateData: Category = {
      name,
    };
    await knexInstance("categories").update(updateData).where({ id });

    res.status(200).json({ name });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const findBook = await knexInstance("products")
      .select("*")
      .where({ "produscts.category_id": id });
    if (findBook[0]) {
      throw new Error(
        "Existem produtos vinculados a essa categoria, impossivel excluir"
      );
    } else {
      const category = await knexInstance("authors").delete().where({ id });

      if (!category) throw new Error("Essa categoria não existe");
      res.status(200).json({ msg: "Categoria deletado" });
    }
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { insert, index, show, update, remove };
