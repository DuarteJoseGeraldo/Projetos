const showResult = async (callback) => {
  const resultOfFunction = await callback;
  console.log(resultOfFunction);
};

export const getAllProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return result;
};

export const getSingleProduct = async (id) => {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  return result;
};

export const getAllCategories = async () => {
  const result = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
  return result;
};

export const getProductsOfSpecificCategory = async (category) => {
  const result = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then((res) => res.json());
  return result;
};

export const getProctsWithRate = async (rate) => {
  const products = await getAllProducts();
  const selectedProducts = products.filter((item) => item.rating.rate >= rate);
  return selectedProducts;
};
export const getProductWithBiggestCountingRate = async () => {
  const products = await getAllProducts();
  const selectedProduct = products.reduce((best, next) => {
    if (best.rating.count > next.rating.count) {
      return best;
    } else return next;
  });
  return selectedProduct;
};

export const getAvarageOfPrices = async () => {
  const products = await getAllProducts();
  const avarage = parseFloat(
    (
      products.reduce((acc, curr) => (acc += curr.price), 0) / products.length
    ).toFixed(3) //to fixed limita as casas depois da virgula, mas retorna como string,
    //e o parseFloat retorna o valor para number
  );
  return avarage;
};

export const getHighestPricedProduct = async () => {
  const products = await getAllProducts();
  const selectedProduct = products.reduce((exp, next) => {
    //exp = expensive, indicando o atual mais caro
    if (exp.price > next.price) {
      return exp;
    } else return next;
  });
  return selectedProduct;
};
export const getLowestPricedProduct = async () => {
  const products = await getAllProducts();
  const selectedProduct = products.reduce((low, next) => {
    //exp = expensive, indicando o atual mais barato
    if (low.price < next.price) {
      return low;
    } else return next;
  });
  return selectedProduct;
};

// showResult(getAllProducts());
// showResult(getSingleProduct(1));
// showResult(getAllCategories());
// showResult(getProductsOfSpecificCategory("jewelery"));
// showResult(getProctsWithRate(4));
// showResult(getProductWithBiggestCountingRate());
// showResult(getAvarageOfPrices());
// showResult(getHighestPricedProduct());
// showResult(getLowestPricedProduct());
