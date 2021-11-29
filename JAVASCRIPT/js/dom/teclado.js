const d = document;
let x = 0;
let y = 0;
export function moveBall(e, ball, stage) {
  let $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitsBall = $ball.getBoundingClientRect(),
    $limitsStage = $stage.getBoundingClientRect();
  //  const move = (direction) => {};
  switch (e.keyCode) {
    case 37:
      if ($limitsBall.left > $limitsStage.left) {
        e.preventDefault();
        x--;
      }

      break;
    case 38:
      if ($limitsBall.top > $limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if ($limitsBall.right < $limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      e.preventDefault();
      if ($limitsBall.bottom < $limitsStage.bottom) {
        e.preventDefault();
        y++;
      }

      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert(`Haz lanzado una alerta con el teclado`);
  }
  if (e.key === "s" && e.altKey) {
    confirm(`Haz lanzado una confirmacion con el teclado`);
  }
  if (e.key === "d" && e.altKey) {
    confirm(`Haz lanzado una promesa con el teclado`);
  }
}
