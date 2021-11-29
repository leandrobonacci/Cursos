const d = document,
  w = window;
export default function contactForm() {
  const $form = d.querySelectorAll(".contact-form"),
    $input = d.querySelectorAll(".contact-form [required]");
  $input.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
  d.addEventListener("keyup", (e) => {
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

  d.addEventListener("submit", e =>{
    
    const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response"),
    $form = d.querySelector(".contact-form");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none")
    }, 5000);
    setTimeout(() => {
      $response.classList.remove("none");
      
      setTimeout(() => {
        $response.classList.add("none")
        $form.reset();
      }, 5000);
    }, 5000);
    
  })
}
