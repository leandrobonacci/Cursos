// console.log("**************ELEMENTOS DEL DOCUMENTO******************");
// console.log(window);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 1000);
// document.write("<h2> Hola Mundo desde el DOM </h2>");

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));
// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll("a").length);
// console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom"));
// console.log(document.querySelector(".link-dom").getAttribute("href"));
// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.lang);

// let $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM);

// $linkDOM.setAttribute("target", "_blank");

// ///data-attributes
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "Modelo de objeto de documento");

// console.log($linkDOM.dataset.description);
// $linkDOM.dataset.description = "JIIIIIIIIIIIIIIIIIIIIIIAAAAAAAAA";
// console.log($linkDOM.dataset.description);

// const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
// $linkDOM.style.setProperty("text-decoration", "none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// //Variable CSS Custom Properties CSS

// const $html = document.documentElement,
//   $body = document.body;
// console.log($body);
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
// console.log(varDarkColor);

// console.log(varYellowColor);
// $body.style.backgroundColor = varYellowColor;

// const $card = document.querySelector(".card");
// const $card2 = document.querySelectorAll(".card")[1];
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.remove("rotate-45");
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.replace("rotate-45", "rotate-135");
// console.log($card.classList.contains("rotate-135"));
// $card2.classList.add("opacity-80", "sepia");
// $card2.classList.add("opacity-80", "sepia", "rotate-135");

// $whats = document.getElementById("que-es");
// console.log($whats);
// let text = `<p>
// faafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasf
// </p>
// <p>
// faafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasf
// </p>
// <p><mark>
// faafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasffaafsasasf
// </mark></p>

// `;
// $whats.textContent = text;
// $whats.outerHTML = text;
// $whats.innerHTML = text;

// $cards = document.querySelector(".cards");
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[3]);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.lastChild);
// console.log($cards.closest("body"));

// const $figure = document.createElement("figure"),
//   $figure2 = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals 2"),
//   $cards = document.querySelector(".cards");
// $img.setAttribute("src", "https://placeimg.com/200/200/tech");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `<img src = "https://placeimg.com/200/200/tech" alt="People">
// <figcaption>People</figcaption>
// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Verano", "Otoño", "invierno"];
// $ul = document.createElement("ul");

// document.write("<h3> Estaciones del Año </h3>");
// document.body.appendChild($ul);

// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// const continentes = ["África", "américa", "Asia", "Europa"],
//   $ul2 = document.createElement("ul");
// document.write("<h3> Continentes del Mundo </h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// const meses = ["enero", "febrero", "marzo", "abril"],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment();
// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });

// document.write("<h3> Meses del año </h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "arquitectura",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/tech",
//     },
//   ];

// cardContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.img);
//   $template.querySelector("figcaption").textContent = el.title;
//   let $clone = document.importNode($template, true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");
// $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt = "Any">
// <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");
// // $cards.replaceChild($newCard, $cards.children[2]);
// //$cards.removeChild($cards.lastElementChild);
// // $cards.insertBefore($newCard, $cards.firstElementChild);
// document.body.appendChild($cloneCards);

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");

// let $contentCard = `
// <img src="https://placeimg.com/200/200/any" alt = "Any">
// <figcaption></figcaption>
// `;
// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML("beforeend", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);
// function holaMundo() {
//   alert("hola mundillo");
//   console.log(event);
// }
// function saludar(nombre = "Desconocid@") {
//   alert(`hola ${nombre}`);
// }
// const feventoRemovedor = () => {
//   alert(`Removiendo evento`);
//   $eventoRemover.removeEventListener("dblclick", feventoRemovedor);
//   $eventoRemover.disabled = true;
// };

// const $eventoSemantico = document.getElementById("evento-semantico"),
//   $eventoMultiple = document.getElementById("evento-multiple"),
//   $eventoRemover = document.getElementById("evento-remover");
// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola Mundo manejador de eventos");
//   console.log(e);
// };
// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//   alert("Hola mundo manejador de eventos múltiples");
//   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
//   console.log(event);
// });

// $eventoMultiple.addEventListener("click", () => {
//   saludar();
//   saludar("Leandro");
// });

// // $eventoRemover.addEventListener("dblclick", feventoRemovedor);
// function flujoEventos(e) {
//   console.log(
//     `HOLA TE SALUDA ${this.className}, el click lo origino ${e.target.className}`
//   );
//   e.stopPropagation();
// }
// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelectorAll(".eventos-flujo a");
// console.log($linkEventos);
// console.log($divEventos);
// $divEventos.forEach((div) => {
//   //FASE BURBUJA
//   // div.addEventListener("click", flujoEventos);
//   div.addEventListener("click", flujoEventos, false);
//   //fase de captura
//   //div.addEventListener("click", flujoEventos, true);
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: false,
//   // });
// });
// $linkEventos.addEventListener("click", (e) => {
//   alert("LEANDROooooooooooooooo");
//   e.preventDefault();
// });

// const $divEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelectorAll(".eventos-flujo a");

// function flujoEventos(e) {
//   console.log(
//     `HOLA TE SALUDA ${this.className}, el click lo origino ${e.target.className}`
//   );
//   e.stopPropagation();
// }
// document.addEventListener("click", (e) => {
//   console.log("click en ", e.target);
//   if (e.target.matches(".eventos-flujo a")) {
//     alert("LEANDROooooooooooooooo");
//     e.preventDefault();
//   }
//   if (e.target.matches(".eventos-flujo div")) {
//     flujoEventos(e);
//     e.preventDefault();
//   }
//   if (e.target.matches("#evento-remover")) {
//     alert("LEANDROooooooooooooooo");
//     e.preventDefault();
//   }
//   if (e.target.matches("#evento-multiple")) {
//     alert("LEANDROooooooooooooooo");
//     e.preventDefault();
//   }
// });
// window.addEventListener("resize", (e) => {
//   console.log("evento resize");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });
// window.addEventListener("scroll", (e) => {
//   console.log("evento scroll");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
//   console.log("VENTANA LOAD");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("Evento DOMCONTENTLOADED");

//   console.log(e);
// });

// window.confirm("confirmacion")
// window.alert("alerta")
// window.prompt("aviso");

// const $btnabrir = document.getElementById("abrir-ventana"),
//   $btncerrar = document.getElementById("cerrar-ventana"),
//   $btnimprimir = document.getElementById("imprimir-ventana");
// let ventana;
// $btnabrir.addEventListener("click", (e) => {
//   ventana = window.open("https://jonmircha.com");
// });
// $btncerrar.addEventListener("click", (e) => {
//   ventana.close();
// });
// $btnimprimir.addEventListener("click", (e) => {
//   window.print();
// });
