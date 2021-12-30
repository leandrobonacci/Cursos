import { postcard } from "../components/postcard.js";
import searchcard from "../components/searchcard.js";
import { ajax } from "./ajax.js";
import wp_api from "./wp_api.js";
const $main = document.getElementById("main")
export async function infinitescroll (){
    
    let query = localStorage.getItem("wpSearch"),
    apiURL,
    component; //HOC
    window.addEventListener("scroll", async ()=>{
     let {scrollTop, clientHeight, scrollHeight} = document.documentElement,
     {hash} = window.location;
    //  console.log(scrollTop, clientHeight, scrollHeight, hash);
     if(scrollTop + clientHeight >= scrollHeight ){
         wp_api.page++;
         if(!hash || hash === "#/" || hash ==="#/home"){
             apiURL = `${wp_api.POSTS}&page=${wp_api.page}`;
             component = postcard
             
         } else if (hash.includes("#/search")){
             apiURL= `${wp_api.SEARCH}&${query}&page=${wp_api.page}`;
             component = searchcard
         } else {
             return false;
         }
         document.querySelector(".loader").style.display = "block";
         await ajax({
             url: apiURL,
             cbSuccess:(posts)=>{
                 let html = "";
                 posts.forEach(post => html += component(post));
                 document.getElementById("main").insertAdjacentHTML("beforeend",html);
                 document.querySelector(".loader").style.display = "none";
                 }
             
             
         })
         
     }
    })
}