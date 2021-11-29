export default function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "☀️";

  document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "1");
    }
    if (localStorage.getItem("theme") === "0") {
      DarkMode();
    }
    if (localStorage.getItem("theme") === "1") {
      LightMode();
    }
  });

  const LightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    localStorage.setItem("theme", "1");
  };
  const DarkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    localStorage.setItem("theme", "0");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        DarkMode();
      } else {
        LightMode();
      }
    }
  });
}
