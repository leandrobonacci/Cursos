import hamburguerMenu from "../JAVASCRIPT/js/dom/menu-hamburguesa.js";
import { alarm } from "./js/dom/reloj.js";
import { digitalClock } from "./js/dom/reloj.js";
import { moveBall, shortcuts } from "./js/dom/teclado.js";
import countdown from "./js/cuentaregresiva.js";
import scrollTopButton from "./js/dom/boton_scroll.js";
import darkTheme from "./js/dom/tema-oscuro.js";
import responsiveMedia from "./js/dom/objeto_responsivo.js";
import responsiveTester from "./js/dom/prueba-responsive.js";
import userDeviceInfo from "./js/dom/deteccion-dispositivos.js";
import networkStatus from "./js/dom/deteccion-red.js";
import searchFilters from "./js/dom/filtro_busqueda.js";
import smartVideo from "./js/dom/video-inteligente.js";
import contactForm from "./js/dom/contact-form.js";
const d = document;
darkTheme(".dark-theme-btn", "dark-mode");
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("js/dom/assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Noviembre 3, 2021 08:19:19", "Y tu que miras putito");
  scrollTopButton(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    ` <a href="https://www.youtube.com/embed/Go723YuA74A" target="_blank" rel="noopener">Ver Video</a>`,
    ` <iframe width="560" height="315" src="https://www.youtube.com/embed/Go723YuA74A"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://www.google.com.ar/maps" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13472.78050690039!2d-63.21499945!3d-32.41393095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1636118874461!5m2!1ses-419!2sar"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>  `
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");
  searchFilters(".card-filter", ".card");
  smartVideo();
  contactForm();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

networkStatus();
