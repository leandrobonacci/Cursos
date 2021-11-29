const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();
  let countdownTempo = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor(
        (limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((limitTime % (1000 * 60)) / 1000);
    $countdown.innerHTML = `<h3> Faltan ${days}d, ${hours}hs, ${minutes}m, ${seconds}s </h3> `;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3> ${finalMessage} </h3>`;
    }
  }, 1000);
}
