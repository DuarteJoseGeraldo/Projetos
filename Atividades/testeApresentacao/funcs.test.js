import * as funcs from "./funcsJS";

describe("calcularMedia", () => {
  it("deve calcular a média corretamente", () => {
    const numeros = [1, 2, 3, 4, 5];
    const resultado = funcs.calcularMedia(numeros);
    expect(resultado).toEqual(3);
  });

  it("deve retornar NaN para array vazio", () => {
    const numeros = [];
    const resultado = funcs.calcularMedia(numeros);
    expect(isNaN(resultado)).toBe(true);
  });
});
