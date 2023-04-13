import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
};

const index = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await knexInstance("products")
      .select(
        "products.title",
        "products.price",
        "products.description",
        "products.title",
        "category.name as category",
        "products.image",
        "products.rate",
        "products.countRate"
      )
      .join("categories", "category.id", "=", "products.category_id");

    res.status(200).json(products);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: Product[] = await knexInstance("products")
      .select(
        "products.title",
        "products.price",
        "products.description",
        "category.name as category",
        "products.image",
        "products.rate",
        "products.countRate"
      )
      .join("categories", "category.id", "=", "products.category_id")
      .where({ "products.id": id });

    if (!product.length) throw new Error("Esse produto não existe");

    res.status(200).json(product[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category, image, rate, countRate } =
      req.body;

    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    if (!findCategory[0]) {
      throw new Error("Categoria não existe");
    }

    const categoryId = findCategory[0].id;

    const idNewProduct: number[] = await knexInstance("products").insert({
      title,
      price,
      description,
      category: categoryId,
      image,
      rate,
      countRate,
    });
    res.status(201).json({
      id: idNewProduct[0],
      title,
      price,
      description,
      category,
      image,
      rate,
      countRate,
    });
  } catch (error) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, price, description, category, image, rate, countRate } =
      req.body;
    const updateData: any = {
      title,
      price,
      description,
      image,
      rate,
      countRate,
    };

    if (category) {
      const categoryData = await knexInstance("categories")
        .select("id")
        .where({ name: category });

      if (!categoryData[0]) {
        throw new Error("Categoria não existe");
      }
      updateData.category_id = categoryData[0].id;
    }

    await knexInstance("books").update(updateData).where({ id });

    res
      .status(200)
      .json({ title, price, description, category, image, rate, countRate });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await knexInstance("products").delete().where({ id });

    if (!product) throw new Error("Esse produto não existe");

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
export default { insert, index, show, update, remove };
