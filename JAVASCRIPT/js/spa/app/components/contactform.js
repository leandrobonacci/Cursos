export function contactform(){
   const d = document,
    w = window;
 const $form = document.createElement("form");
 $form.classList.add("contact-form");
 const $styles = document.getElementById("dynamic-style");

 function validationForm() {
    const $form = d.querySelectorAll(".contact-form"),
      $input = d.querySelectorAll(".contact-form [required]");
    $input.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });
    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern; // corto circuito para desviar el null
        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });
  
    document.addEventListener("submit", e =>{
      e.preventDefault();
      const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response"),
      $error = d.querySelector(".contact-form-error"),
      $form = d.querySelector(".contact-form");
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/bonacci.leandro@gmail.com",{
          method: "POST",
          body: new FormData (e.target)
      })
      .then(res=> res.ok ? res.json(): Promise.reject(res))
      .then(json=>{
        $loader.classList.add("none")
        $response.classList.remove("none");
        $response.innerHTML = `<p>Formulario Enviado</p>`;
   
          $form.reset();
           
        
      })
      .catch(err=>{
          let message = err.statusText || "Ocurrió un error"
       $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      })
      .finally(()=>   setTimeout(() => {
         $response.classList.add("none")
         $response.innerHTML = "";
     }, 3000) )
  
      
     });
  
  }

 $styles.innerHTML = `
 :root {
    --main-font: sans-serif;
    --font-size: 16px;
    --main-color: #f7df1e;
    --second-color: #222;
    --main-modal-color: rgba(247, 222, 30, 0.85);
    --second-modal-color: rgba(34, 34, 34, 0.85);
    --container-width: 1200px;
  }
  html {
    box-sizing: border-box;
    font-family: var(--main-font);
    font-size: var(--font-size);
    scroll-behavior: smooth;
  }
  
  *,
  *::before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    overflow-x: hidden;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  /* formulario validacion*/
  .contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .contact-form > * {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }
  .contact-form textarea {
    resize: none;
  }
  .contact-form legend,
  .contact-form-response {
      color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
  }
  .contact-form input[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
  }
  
  .contact-form *::placeholder {
    color: #000;
  }
  .contact-form [required]:valid {
    border: 5px solid var(--form-ok-color);
  }
  .contact-form [required]:invalid {
    border: 5px solid var(--form-error-color);
  }
  .contact-form-error {
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
  }
  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
  }
  .none {
    display: none;
  }
  @keyframes show-message {
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  `;
 $form.innerHTML = `
        <legend>Envianos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre"
          title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
        <br>
        <input type="email" name="email" placeholder="Escribe tu mail" title="Ingresa un email válido"
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
        <br>
        <input type="text" name="asunto" placeholder="Escribe el asunto" title="Ingrese asunto" required>
        <br>
        <textarea name="comentario" cols="50" rows="5" placeholder="Escribe el comentario"
          title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
        <br>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
          <img src="./assets/circles.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
          <p>Los datos han sido enviados</p>
        </div>`
        setTimeout(()=>validationForm(), 100);

        
 
 return $form;
}