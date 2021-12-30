export function menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
    <a href="#/home"> HOME </a>
<span> - </span>
<a href="#/search">Busqueda</a>
<span> - </span>
<a href="#/contact">Contacto</a>
<span> - </span>
<a href="https://aprendejavascript.org" target="_blank"> APRENDE JS </a>`;
    return $menu
}