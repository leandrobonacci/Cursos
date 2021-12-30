export function searchForm(){
    const $search = document.createElement("form"),
    $input = document.createElement("input");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar.."
    $input.autocomplete = "off";



    $search.innerHTML = `<h2> Buscador </h2>`;
    $search.appendChild($input);
    $search.classList.add("search");
     if(location.hash.includes("#/search")){
         $input.value = localStorage.getItem("wpSearch")
     }
     document.addEventListener("search", e=>{
       if(!e.target.matches("input[type='search']")) return false;
       if (!e.target.value) localStorage.removeItem("wpSearch");
       
     });
    document.addEventListener("submit", e=>{
        if(!e.target.matches(".search")) return false;
        e.preventDefault();
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    });
    return $search
}
  
   