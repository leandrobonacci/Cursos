import wp_api from "./helpers/wp_api.js"
import { loader } from "./components/loader.js";
import { header } from "./components/header.js";
import { main } from "./components/main.js";
import { router } from "./components/router.js";
import { infinitescroll } from "./helpers/infinite_scroll.js";
export function App (){
   const $root = document.getElementById("root");
   $root.innerHTML = null;
   $root.appendChild(header());
   $root.appendChild(main());
   $root.appendChild(loader());
   router();
   infinitescroll();








    // document.getElementById("root").innerHTML =`<h1> Bienvenidos a mi primer SPA </h1>`
    console.log(wp_api);


}


