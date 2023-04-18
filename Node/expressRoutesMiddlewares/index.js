import express from "express";
import { router as products } from "./routes/products.js";
import { router as home } from "./routes/home.js";
const app = express();

app.use(express.json());
app.use("/store/products", products);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listennig on port ${port}...`));
