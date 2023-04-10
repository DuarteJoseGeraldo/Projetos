const exec = (fn, a, b) => fn(a, b);

const sum = (x, y) => console.log(x + y);
const sub = (x, y) => console.log(x - y);

exec(sum, 4, 4);
exec(sub, 5, 4);

const cb = () => console.log("Exec...");

setInterval(cb, 1000);
