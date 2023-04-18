import * as func from "./funcsTS";
describe("calcularMedia", () => {
  it("deve calcular a média corretamente", () => {
    const numeros: number[] = [1, 2, 3, 4, 5];
    const resultado = func.calcularMedia(numeros);
    expect(resultado).toEqual(3);
  });

  it("deve retornar NaN para array vazio", () => {
    const numeros: number[] = [];
    const resultado = func.calcularMedia(numeros);
    expect(resultado).toBeNaN();
  });
});
