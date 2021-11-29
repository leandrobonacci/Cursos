import stripeKeys from "./stripe-keys.js";

const d = document,
$tacos = d.getElementById("tacos"),
$template = d.getElementById("taco-template").content,
$fragment = d.createDocumentFragment(),
fetchOptions={
    headers:{
        Authorization: `bearer ${stripeKeys.secret}`
    }
};
let prices,products;

const moneyFormat = num => `$${num.slice(0,-2)},${num.slice(-2)}`;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
]).then(responses => Promise.all(responses.map(res => res.json()))).then(json=>{
    
    products = json[0].data;
    prices = json[1].data;
    

   prices.forEach(el=>{
       let productData = products.filter(products => products.id === el.product);
      
       
       $template.querySelector(".taco").setAttribute("data-price", el.id);
       $template.querySelector("img").src = productData[0].images[0];
       $template.querySelector("img").alt = productData[0].name;
       $template.querySelector("figcaption").innerHTML = `
       ${productData[0].name} <br>
       ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
       `;







       let $clone = d.importNode($template,true);
       $fragment.appendChild($clone);
    })
    $tacos.appendChild($fragment);



   })
    .catch(err=>{
        console.log(err);
        let message = err.statusText || `Ocurrio un error al conectarse con el API de stripe`;
        $tacos.innerHTML = `<p> Error ${err.status}: ${message} </p>`
    })

    d.addEventListener("click", e =>{
        if(e.target.matches(".taco *")){
            let price = e.target.parentElement.getAttribute("data-price");
            Stripe(stripeKeys.public)
            .redirectToCheckout({
                lineItems:[{
                    price, quantity: 1}],
                    mode:"subscription",
                    successUrl:"https://127.0.0.1/PROGRAMACION/CURSOS/JAVASCRIPT/js/ajax-ejercicio/assets/stripe-success.html",
                    cancelUrl:"https://127.0.0.1/PROGRAMACION/CURSOS/JAVASCRIPT/js/ajax-ejercicio/assets/stripe-error.html",
                
            }).then(res=>{
                if(res.error){
                    $tacos.insertAdjacentHTML("afterend", res.error.message)
                }
            });

        }
        
    })


