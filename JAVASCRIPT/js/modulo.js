import saludar, { PI, usuario, password } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";
import { hello } from "./constantes.js";
import { Saludar2 } from "./constantes.js";
console.log("Archivos modulo.js");
console.log(PI);
console.log(PI, usuario, password);
console.log(aritmetica.sumar(3, 4), aritmetica.restar(2, 2));
saludar();
hello();
let saludo = new Saludar2();
saludo;
