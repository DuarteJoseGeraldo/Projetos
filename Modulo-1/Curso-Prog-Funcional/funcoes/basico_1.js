let a = 4;
console.log(a);

//declaração de função
function goodMornig() {
  console.log("Good Mornig");
}

goodMornig();

//funtion expression
const goodAfternon = function () {
  console.log("Good Afternoon");
};
goodAfternon();

function add(a = 0, b = 0) {
  return a + b;
}
