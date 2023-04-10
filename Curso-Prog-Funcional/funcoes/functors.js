//wrapper
/*São objetos que implementam a função MAP que tambem é um "wrapper" de um vetor */

const secureType = (value) => {
  return {
    value,
    isValid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.isValid()) {
        return secureType(null);
      } else {
        const newValue = fn(this.value);
        return secureType(newValue);
      }
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
};

const result = secureType("Esse é um texto")
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .map((t) => t.split("").join(" "));

console.log(result.value);

const result2 = secureType("Esse é um texto")
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .flatMap((t) => t.split("").join(" "));

console.log(result2);
