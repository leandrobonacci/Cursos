export function postcard(props){
    let {title, slug, _embedded,date,id} = props;
    let dateFormat = new Date(date).toLocaleString();
    



document.addEventListener("click", e=>{
    if(!e.target.matches(".post-card a") )return false;
    localStorage.setItem('wpPostId', e.target.dataset.id);
})




    let urlPost = _embedded["wp:featuredmedia"][0].source_url 
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.png";
    return `<article class="post-card" data-id="${id}"><h2>${title.rendered}</h2>
    <img src="${urlPost}" alt="${title.rendered}">
<p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
</p></article>`;
}