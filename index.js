const scoreTags = document.getElementsByClassName("score");
const moedaImg = document.getElementsByClassName("card__container")[0];

let score = 0;
let state = "cara";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function lancarmoeda(choice) {
  const rolagem = getRandomInt(2);
  const caraoucoroa = rolagem === 0 ? "cara" : "coroa";

  console.log("scoreTags", scoreTags[0]);

  if (choice === caraoucoroa) {
    score += 10;
    console.log("CARAAAA");

    if (state != "cara") {
      moedaImg.style.transform = "rotateY(0deg)";
      state = "cara";
      alert("VOCÊ ACERTOU!");
    }
  } else {
    score -= 10;
    console.log("coroaaaa");
    alert("VOCÊ ERROU!");

    if (state != "coroa") {
      moedaImg.style.transform = "rotateY(180deg)";
      state = "coroa";
    }
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
