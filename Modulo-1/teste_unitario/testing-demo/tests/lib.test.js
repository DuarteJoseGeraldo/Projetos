const lib = require("../lib");

describe("absolute", () => {
  it("shuld return a positive number if imput is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("shuld return a positive number if imput is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("shuld return zero if imput is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Jose");
    expect(result).toMatch(/Jose/);
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    //muito generalizado
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //muito especifico
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");

    expect(result.length).toBe(3);

    // metodo adequado
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    //metodo ideal
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toBe({ id: 1, price: 10 }); //confere a referencia de memoria, logo da erro
    //expect(result).toEqual({ id: 1, price: 10 }); //verifica a igualdade do objeto, mas precisa que todas as propriedades sejam listadas
    expect(result).toMatchObject({ id: 1 }); //verifica se as propriedades condizem, nao precisando passar todas por parmetro
    expect(result).toHaveProperty("id", 1); //Verifica se o retorno possui esta propriedade com o valor seguinte
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    //null
    //undefined
    //NaN
    //''
    //0
    //false
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((falsy) => {
      expect(() => lib.registerUser(null)).toThrow();
    });
  });
  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("Jose");
    expect(result).toMatchObject({ username: "Jose" });
    expect(result.id).toBeGreaterThan(0);
  });
});
