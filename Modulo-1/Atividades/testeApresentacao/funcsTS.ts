export function calcularMedia(numeros: number[]): number {
  const soma = numeros.reduce((total, num) => total + num, 0);
  const media = soma / numeros.length;
  return media;
}
