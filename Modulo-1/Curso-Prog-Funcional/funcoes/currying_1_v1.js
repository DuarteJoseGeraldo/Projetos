const verifyTextWithSize = (min) => {
  return (max) => {
    return (err) => {
      return (text) => {
        const size = (text || "").trim().length;
        if (size < min || size > max) {
          throw err;
        }
      };
    };
  };
};
const aplyValidation = (fn) => {
  return (valor) => {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
};
const forceStandardSize = verifyTextWithSize(4)(255);
const forceValidName = forceStandardSize("Nome invalido");
const validateProductName = aplyValidation(forceValidName);

const p1 = { name: "A", price: 14.99, descount: 0.25 };
const p2 = { name: "AB", price: 14.99, descount: 0.25 };

// verifyTextWithSize(4)(255)("Nome invalido")(p1.name);
// forceStandardSize("Nome invalido")(p1.name);
// forceValidName(p1.name);
console.log(validateProductName(p1.name));
console.log(validateProductName(p2.name));
