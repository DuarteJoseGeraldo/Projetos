import { Logger } from "./logger.js";
import path, { resolve } from "path";
import os from "os";
import fs from "fs";
import EventEmitter from "events";
import http from "http";

// console.log(); // global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = "";

// globalThis.setTimeout;
// console.log(global.message);

// logger.log("message");

// const pathObj = path.parse(__filename);

/*__filename nao existe no es6, 
Para corrigir o erro, você pode usar o objeto import.meta em vez da variável __filename. 
O objeto import.meta é uma propriedade do módulo ESM que contém 
informações sobre o módulo atual, incluindo o nome do arquivo.
*/

// const pathObj = path.parse(import.meta.url);
// console.log(pathObj);

// const totalMemory = os.totalmem();

// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", (err, resolve) => {
//   if (err) console.log(`Error: ${err}`);
//   else console.log(`Result: ${resolve}`);
// });

// const emitter = new EventEmitter();

// const logger = new Logger();

// //Register a listener
// logger.on("messageLogged", (eventArg) => {
//   console.log("Listener Called", eventArg);
// });

// logger.log("message");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
