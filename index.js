const scoreTags = document.getElementsByClassName("score");
const moedaImg = document.getElementById("coin__image");

let score = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function lancarmoeda(choice) {
  const rolagem = getRandomInt(2);
  const caraoucoroa = rolagem === 0 ? "cara" : "coroa";

  console.log("scoreTags", scoreTags[0]);

  if (choice === caraoucoroa) {
    score += 10;

    moedaImg.src = "/public/cara.png";
  } else {
    score -= 10;
    moedaImg.src = "/public/coroa.png";
  }

  if (score >= 0) {
    scoreTags[0].classList.remove("border-red");
    scoreTags[1].classList.remove("text-red");
    scoreTags[0].classList.add("border-blue");
    scoreTags[1].classList.add("text-blue");
  } else {
    scoreTags[0].classList.remove("border-blue");
    scoreTags[1].classList.remove("text-blue");
    scoreTags[0].classList.add("border-red");
    scoreTags[1].classList.add("text-red");
  }

  scoreTags[1].textContent = score;
}
