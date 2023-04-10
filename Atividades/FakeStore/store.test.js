import * as funcs from "./fake_store";

describe("getAllProducts", () => {
  it("Should return a object", async () => {
    const result = await funcs.getAllProducts();
    expect(Array.isArray(result)).toBe(true);
  });
  it("Should not return a empty array", async () => {
    const result = await funcs.getAllProducts();
    expect(result.length).toBeGreaterThan(0);
  });

  ///////Dar Erro///////

  it("Should use async functions to test it", () => {
    const result = funcs.getAllProducts();
    expect(Array.isArray(result)).toBe(true);
  });
});

describe("getSingleProduct", () => {
  it("Should parameter be a number", async () => {
    const params = 2;
    const result = await funcs.getSingleProduct(params);
    expect(typeof params).toBe("number");
  });
  it("Should return an object with the same id of the parameter", async () => {
    const params = 2;
    const result = await funcs.getSingleProduct(params);
    expect(result).toMatchObject({ id: 2 });
  });

  ///////Dar Erro///////

  it("Should return a object with 7 keys", async () => {
    const params = 2;
    const result = await funcs.getSingleProduct(params);
    expect(Object.keys(result).length).toBe(8);
  });
});

describe("getAllCategories", () => {
  it("Should not return a empty array", async () => {
    const result = await funcs.getAllCategories();
    expect(result.length).toBeGreaterThan(0);
  });

  ///////Dar Erro///////

  it("Should return a array with the categories", async () => {
    const result = await funcs.getAllCategories(); //Testa a função pra lembrar pq ta dando erro (olha as aspas do retorno)
    expect(result).toBe([
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
  });
});

describe("getProductsOfSpecificCategory", () => {
  it("Should return a array", async () => {
    const result = await funcs.getProductsOfSpecificCategory("jewelery");
    expect(Array.isArray(result)).toBe(true);
  });
  it("Should return a not empty array", async () => {
    const result = await funcs.getProductsOfSpecificCategory("jewelery");
    expect(result.length).toBeGreaterThan(0);
  });

  ///////Dar Erro///////

  it("Should recieve a string in the parameters", async () => {
    const params = 2;
    const result = await funcs.getProductsOfSpecificCategory(params);
    expect(typeof params).toBe("string");
  });
});

describe("getProctsWithRate", () => {
  it("should return an array on successful request", async () => {
    const params = 4;
    const response = await funcs.getProctsWithRate(params);
    expect(Array.isArray(response)).toBe(true);
  });
  it("should return a array whith 7 itens", async () => {
    const params = 4;
    const response = await funcs.getProctsWithRate(params);
    expect(response.length).toBe(7);
  });

  ///////Dar Erro///////

  it("Should receive a number via parameter", async () => {
    const params = "xpto";
    const response = await funcs.getProctsWithRate(params);
    expect(typeof params).toBe("number");
  });
});

describe("getProctWithBiggestCountingRate", () => {
  it("Should return a object whit id key = 17", async () => {
    const result = await funcs.getProductWithBiggestCountingRate();
    expect(result).toMatchObject({ id: 17 });
  });
  it("Should not return undefined", async () => {
    const result = await funcs.getProductWithBiggestCountingRate();
    expect(result).toBeDefined();
  });
  it("Should return a product whith category = jewelery", async () => {
    const result = await funcs.getProductWithBiggestCountingRate();
    expect(result.category).toBe("jewelery");
  });
});

describe("getAvarageOfPrices()", () => {
  it("Should return a number", async () => {
    const result = await funcs.getAvarageOfPrices();
    expect(typeof result).toBe("number");
  });
  it("Should return 162.046", async () => {
    const result = await funcs.getAvarageOfPrices();
    expect(result).toBe(162.046);
  });

  ///////Dar Erro///////

  it("Should return a value bigger than 170", async () => {
    const result = await funcs.getAvarageOfPrices();
    expect(result).toBeGreaterThan(170);
  });
});

describe("getHighestPricedProduct", () => {
  it("Should return a product whith id key = 14", async () => {
    const result = await funcs.getHighestPricedProduct();
    expect(result.id).toBe(14);
  });
  it("Should return a product with price key = 999.99", async () => {
    const result = await funcs.getHighestPricedProduct();
    expect(result.price).toBe(999.99);
  });

  ///////Dar Erro///////

  it("Should return a product whith category = jewelery", async () => {
    const result = await funcs.getHighestPricedProduct();
    expect(result.category).toBe("jewelery");
  });
});

describe("getLowestPricedProduct", () => {
  it("Should return a product whith id key = 19", async () => {
    const result = await funcs.getLowestPricedProduct();
    expect(result.id).toBe(19);
  });
  it("Should return a product with price key = 7.95", async () => {
    const result = await funcs.getLowestPricedProduct();
    expect(result.price).toBe(7.95);
  });

  ///////Dar Erro///////

  it("Should return a product with price < 5.00", async () => {
    const result = await funcs.getLowestPricedProduct();
    expect(result.price).toBeLessThan(5);
  });
});

// describe("",()=>{
//   it("",async()=>{
//     const result =  await;
//   })
//   it("",async()=>{
//     const result =  await;
//   })

// ///////Dar Erro///////

//   it("",async()=>{
//     const result =  await;
//   })
// })
