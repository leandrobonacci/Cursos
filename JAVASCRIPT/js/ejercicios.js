// function contar(palabra) {
//   let numero = palabra.length;
//   console.log(numero);
// }

// contar("Hola mundo");

// function acortar(palabra, numero) {
//   let acortado = palabra.slice(0, numero);
//   console.log(acortado);
// }
// acortar("hola mundo", 4);

// //ya lo transforma split a arreglo
// function cortar(palabra, metodo) {
//   let cortado = palabra.split(metodo);
//   console.log(cortado);
// }
// cortar("hola que tal", " ");

// function concatenar(palabra, cantidad) {
//   for (i = 0; i < cantidad - 1; i++) {
//     palabra += " " + palabra;
//   }
//   console.log(palabra);
// }
// concatenar("hola mundo", 4);

// 1
// function contarCaracteres(cadena = "") {
//   if (!cadena) {
//     console.warn("No ingresaste ninguna cadena");
//   } else {
//     console.info(`La cadena "${cadena}" tiene "${cadena.length}" caracteres`);
//   }
// }
// const contarCaracteres = (cadena = "") =>
//   !cadena
//     ? console.warn("No ingresaste ninguna cadena")
//     : console.info(`La cadena "${cadena}" tiene "${cadena.length}" caracteres`);
// contarCaracteres();
// contarCaracteres("cadena");

// // 2

// const recortarTexto = (cadena = "", longitud = undefined) =>
//   !cadena
//     ? console.warn("No ingresaste el texto")
//     : longitud === undefined
//     ? console.warn("No ingresaste longitud de corte")
//     : console.info(
//         `Su cadena es ${cadena} y su cadena recortada es ${cadena.slice(
//           0,
//           longitud
//         )}`
//       );

// recortarTexto("Hola mundo", 4);
// recortarTexto("hola mundo");
// recortarTexto("hola mundo", 6);

// //3

// const cadenaAArreglo = (cadena = "", separador = undefined) =>
//   !cadena
//     ? console.warn("no ingresaste la cadena")
//     : separador === undefined
//     ? console.warn("ingresa el separador")
//     : console.info(cadena.split(separador));

// cadenaAArreglo();
// cadenaAArreglo("asd", "");

// //4

// const repetirTexto = (texto = "", veces = undefined) => {
//   if (!texto) {
//     return console.warn("No ingresaste el texto");
//   }
//   if (veces === undefined) {
//     return console.warn("Ingresa la cantidad de veces a repetir");
//   }
//   if (veces === 0) {
//     return console.warn("El numero no puede ser 0");
//   }
//   if (veces < 0) {
//     return console.warn("El numero no puede ser menor a 0");
//   } else {
//     for (let i = 1; i <= veces; i++) {
//       console.info(`${texto}, ${i}`);
//     }
//   }
// };
// repetirTexto("hola", -5);
// repetirTexto("hola", 5);
// repetirTexto("hola", 0);
//6
// const contadorPalabras = (texto = "", palabra = "") => {
//   if (!texto) return console.warn("No ingresaste el texto");
//   if (!palabra) return console.warn("No ingresaste la palabra");

//   let contador = 0;
//   let i = 0;
//   while (i !== -1) {
//     i = texto.indexOf(palabra, i);
//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   return console.info(` La palabra ${palabra} se repite ${contador} veces`);
// };

// contadorPalabras();
// contadorPalabras("asd");
// contadorPalabras("asd asd asd asd", "asd");

// //7
// const palindromo = (palabra = "") => {
//   if (!palabra) return console.warn("No ingresaste ninguna palabra");
//   palabra = palabra.toLowerCase();
//   let palabra2;
//   palabra2 = palabra.split("").reverse().join("");
//   if (palabra2 === palabra)
//     return console.info(
//       `Su palabra es un palindromo ${palabra}, reversa ${palabra2}`
//     );
//   else
//     return console.info(
//       `Su palabra no es un palindromo ${palabra}, reversa ${palabra2}`
//     );
// };
// palindromo();
// palindromo("ele");
// palindromo("ale");

// const eliminarPatron = (texto = "", patron = "") => {
//   !texto
//     ? console.warn("No ingresaste texto")
//     : !patron
//     ? console.warn("no ingresaste patron")
//     : console.info(texto.replace(new RegExp(patron, "ig"), ""));
// };
// eliminarPatron();
// eliminarPatron("xyz,");
// eliminarPatron("xyz,yxzxyzxyzyxyxyzxyzxyxzyzxyzxyxzycyxyzyczxyyzxyc", "xy");
// const aleatorio = (max = 601, min = 500) => {
//   return console.info(Math.round(Math.random() * (max - min) + min));
// };
// aleatorio();

// const capicua = (numero) => {
//   if (!numero) return console.warn("No ingreso su numero");
//   if (typeof numero !== "number") return console.warn("No es un numero");
//   numero = Math.round(numero);
//   numero = numero.toString([10]);
//   if (numero.length <= 1)
//     return console.warn("su numero debe ser de mas de 1 digito");
//   let numero2 = numero.split("").reverse().join("");
//   if (numero === numero2) return console.info(true);
//   else return console.info(false);
// };

// capicua(12);
// //8
// const factorial = (numero = undefined) => {
//   if (numero === undefined) return console.warn("No ingresaste numero");
//   if (typeof numero !== "number")
//     return console.warn("Su valor no es un numero");
//   if (numero === 0) return console.error("Su numero no puede ser 0");
//   if (numero < 0) return console.error("Su numero no puede ser negativo");
//   let factorial = 1;
//   for (let i = numero; i > 1; i--) {
//     factorial = factorial * i;
//   }
//   return console.info(factorial);
// };

// factorial(0);
// factorial("sd");
// factorial(-1);
// factorial(4);

// const primo = (numero = "") => {
//   if (!numero) return console.warn("No ingresaste un numero");
//   if (typeof numero !== "number") return console.warn("No es un numero");
//   if (numero == 0) return console.warn("No es un numero primo");
//   if (numero === 1) return console.warn("No es un numero primo");
//   for (let x = 2; x < numero / 2; x++) {
//     if (numero % x == 0) return console.log(false);
//   }
//   return console.log(true);
// };

// primo(5);

// const parImpar = (numero = "") => {
//   if (!numero) return console.warn("no ingresaste numero");
//   if (typeof numero !== "number") return console.warn("no es un numero");
//   if (numero % 2 == 0) return console.log("Es par");
//   else return console.log("es impar");
// };
// parImpar();
// parImpar(1);
// parImpar(2);
// parImpar(33);
// parImpar(44);
// parImpar(11);
// parImpar(29);

// const celciusAf = (grados = "", conversion = "") => {
//   if (typeof grados !== "number")
//     return console.warn("no ingresaste un numero");
//   if (!conversion)
//     return console.warn("no ingresaste si a celcius (C) o farenheit (F)");
//   if (typeof conversion !== "string") return console.warn("Ingresaste mal la unidad de conversion");

//   conversion = conversion.toLowerCase();
//   switch (conversion) {
//     case "c":
//       if (grados >= -100 && grados <= 200) {
//         const operacion = grados * 1.8 + 32;
//         console.info(`${operacion} ºF`);
//       } else console.warn("Ingresaste mal los grados celcius");
//       break;
//     case "f":
//       if (grados >= 32 && grados <= 212) {
//         const operacion = (grados - 32) * 0.55;
//         console.info(`${operacion} ºC`);
//       } else console.warn("Ingresaste mal los grados farenheit 32-212");
//       break;
//     default:
//       console.log("error");
//   }
// };
// celciusAf(32, "f");
// celciusAf(150, "f");
// celciusAf(100, "c");
// celciusAf(32, "c");
// const convertirBinarioDecimal = (numero = "", conversion = "") => {
//   if (!numero) return console.warn("No ingresaste ningun numero");
//   if (typeof numero !== "number") return console.warn("No es un numero");
//   numero = Math.round(numero);
//   if (typeof conversion !== "string")
//     return console.warn("Debe introducir B para binario o D para decimal");
//   conversion = conversion.toLowerCase();
//   switch (conversion) {
//     case "d":
//       console.info(
//         `${numero} binario = decimal ${parseInt(numero, 2)} base 10`
//       );
//       break;

//     case "b":
//       console.info(`${numero} decimal = binario ${numero.toString(2)} base 2`);
//       break;

//     default:
//       console.warn("No ingresaste ni b para binario ni d para decimal");
//       break;
//   }
// };
// convertirBinarioDecimal();
// convertirBinarioDecimal(1000);
// convertirBinarioDecimal(2, "b");
// convertirBinarioDecimal(1000, "d");

// const rebaja = (precio = undefined, descuento = undefined) => {
//   if (precio === undefined) return console.warn("No ingresaste ningun numero");
//   if (descuento === undefined) return console.warn("ingresa el % de descuento");
//   if (descuento > 100 || descuento < 0)
//     return console.warn("el descuento maximo es 100 y minimo 0");
//   if (precio <= 0)
//     return console.warn("el precio no puede ser menor ni igual que 0");
//   let precio2;
//   precio2 = precio - (precio * descuento) / 100;
//   console.log(
//     `Su precio es ${precio} y descuento ${descuento}%, precio final ${precio2}`
//   );
// };
// rebaja(1000, 20);
// rebaja();
// rebaja(0, 0);
// const calcularAnios = (fecha = undefined) => {
//   if (fecha === undefined) return console.warn("No ingresaste fecha");
//   if (!(fecha instanceof Date)) return console.warn("No es una fecha valida");
//   let hoyMenosFecha = new Date().getTime() - fecha.getTime();
//   aniosenMS = 1000 * 60 * 60 * 24 * 365;
//   aniosHumanos = Math.floor(hoyMenosFecha / aniosenMS);
//   return Math.sign(aniosHumanos) === -1
//     ? console.info(
//         `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear}`
//       )
//     : Math.sign(aniosHumanos) === 1
//     ? console.info(
//         `Han pasado ${aniosHumanos} año, desde ${fecha.getFullYear()}`
//       )
//     : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
// };

// calcularAnios();

// calcularAnios(false);

// calcularAnios(new Date());
// calcularAnios(new Date(1995));

// const consoVocales = (texto = "") => {
//   if (!texto) return console.warn("No ingresaste una cadena de texto");
//   if (typeof texto !== "string")
//     return console.warn("No ingresaste una cadena de texto");
//   let consonantes = 0,
//     vocales = 0;
//   texto = texto.toLowerCase();
//   for (let letra of texto) {
//     if (/[aeiouáéíóú]/.test(letra)) {
//       vocales++;
//     }
//     if (/[bcdefghjklmnopqrstvuwxyz]/.test(letra)) {
//       consonantes++;
//     }
//   }
//   console.log(`hay ${vocales} vocales y ${consonantes} consonantes`);
//   return console.info({
//     texto,
//     vocales,
//     consonantes,
//   });
// };

// consoVocales("holanda asdasdas");

// const validarNombre = (nombre = "") => {
//   if (!nombre) return console.warn("no ingresaste un nombre");
//   if (typeof nombre !== "string")
//     return console.error("el valor no es una cadena de texto");
//   let expReg = /^[A-Za-zÑñÁáÉé\s]+$/g.test(nombre);
//   return expReg
//     ? console.info(`El nombre ingresado es valido ${nombre}`)
//     : console.warn(`El nombre ingresado no es valido ${nombre}`);
// };
// validarNombre("leandro");

// const validarCorreo = (correo = "") => {
//   if (!correo) return console.warn("No ingreso un correo");
//   if (typeof correo !== "string") return console.warn("No es una cadena");
//   let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
//     correo
//   );
//   return expReg
//     ? console.info(`El correo ingresado es valido ${correo}`)
//     : console.info(`El correo ingresado es invalido ${correo}`);
// };

// validarCorreo("leawegwefwe@gmail.com.ar");

// const elevados = (arreglo1 = undefined) => {
//   if (arreglo1 === undefined)
//     return console.warn("no ingresaste ningun numero");
//   if (!(arreglo1 instanceof Array))
//     return console.error("El valor que ingresaste no es un arreglo");
//   if (arreglo1.length === 0) return console.error("El arreglo esta vacio");
//   for (let num of arreglo1)
//     if (typeof num !== "number")
//       return console.error(`el valor ${num} no es un numero`);

//   const arreglo2 = arreglo1.map((el) => el * el);
//   return console.info(`Arreglo original ${arreglo1} elevado ${arreglo2}`);
// };
// elevados([1, 2, 3, 4, 5]);

const arrayMinMax = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    return console.warn("No ingresaste un arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esa vacio");
  for (let num of arreglo) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} no es un numero`);
  }
  return console.info(
    `Su maximo es ${Math.max(...arreglo)} y minimo es ${Math.min(...arreglo)}`
  );
};
// arrayMinMax([1, 2, 3, 4, 5, 6, 7]);

const parImpar = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    return console.warn("No ingresaste un arreglo");
  if (arreglo.length === 0) return console.error("El arreglo esa vacio");
  for (let num of arreglo) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} no es un numero`);
  }
  return console.info({
    pares: arreglo.filter((num) => num % 2 === 0),
    impares: arreglo.filter((num) => num % 2 !== 0),
  });
};

// parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const orden = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    return console.warn("No ingresaste un arreglo");
  for (let num of arreglo) {
    if (typeof num !== "number")
      return console.error(`el valor ${num} no es un numero`);
  }
  objeto = {
    mayoramenor: arreglo.map((des) => des).sort(),
    menoramayor: arreglo
      .map((as) => as)
      .sort()
      .reverse(),
  };
  console.info(objeto);
};

// orden([1, 2, 3, 4, 5, 6]);

const eliminarduplicados = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    return console.warn("No ingresaste un arreglo");
  for (let num of arreglo) {
    if (typeof num !== "number")
      return console.error(`el valor ${num} no es un numero`);
  }
  objeto = {
    arreglo,
    arregloeliminado: arreglo.filter((item, index) => {
      return arreglo.indexOf(item) === index;
    }),
    arregloconset: [...new Set(arreglo)],
  };
  console.info(objeto);
};

// eliminarduplicados([1, 2, 3, 3, 5, 6]);

const promedio = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No ingresaste un arreglo");
  if (!(arreglo instanceof Array))
    return console.warn("No ingresaste un arreglo");
  for (let num of arreglo) {
    if (typeof num !== "number")
      return console.error(`el valor ${num} no es un numero`);
  }
  return console.info(
    arreglo.reduce((total, num, index, arreglo) => {
      total += num;
      if (index === arreglo.length - 1) {
        return `Tu promedio del arreglo ${arreglo.join(" + ")} de mierda es ${
          total / arreglo.length
        }`;
      } else {
        return total;
      }
    })
  );
};
// promedio([1, 2, 3, 4, 5, 6]);
