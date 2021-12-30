import wp_api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { postcard } from "./postcard.js";
import { post } from "./post.js";
import  searchcard  from "./searchcard.js";
import { contactform } from "./contactform.js";
export async function router(){
let {hash} = location;
const $main = document.getElementById("main")

 if(!hash || hash === "#/" || hash.includes("#/home")){
    await ajax({
        url: wp_api.POSTS,
        cbSuccess: (posts)=>{
        console.log(posts);
        let html = "";
        posts.forEach(el => {
            html += postcard(el);
            $main.innerHTML = html;
        })
        
        }
    });

 } else if (hash.includes("#/search")){
   $main.innerHTML = "<h2> Buscador </h2>"
   let query = localStorage.getItem("wpSearch");

   if(!query){
   document.querySelector(".loader").style.display = "none";
  return false;
}
   await ajax({
     url: `${wp_api.SEARCH}${query}`,
     cbSuccess: (search) =>{
     let html = "";
     
     if(search.length === 0){
     html = `
     <p class= "error">
     No existen resultados para 
     <mark> ${query}</mark>
     </p>
     `;
     }else {
       search.forEach(post => html += searchcard(post));
     }
     $main.innerHTML = html;
    
    
    } })
 
    }
 else if (hash.includes("#/contact")){

  $main.appendChild(contactform());
 }
  else {
 
   await ajax({
      
      url: `${wp_api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post2)=>{
      console.log(post2);
      let html ="";
      html = post(post2);
      $main.innerHTML = html;
      }})
   
 
}
document.querySelector(".loader").style.display = "none";
}