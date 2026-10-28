const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const question = document.getElementById("question");
const response = document.getElementById("response");
const card = document.querySelector(".card");
const celebration = document.getElementById("celebration");

let noClicks = 0;
const messages = [
    "Laisse moi une chance ",
    "On sait jamais ce qui peut arriver",
    "Je veux juste une chance✨",
    "Je promet de ne pas te decevoir💌",
    "Je serai l'homme le plus romantique pour toi🌹",
    "Faut accepter ❤️"
];

noButton.addEventListener("click", () => {
    noClicks += 1;
    const noScale = Math.max(0.62, 1 - noClicks * 0.075);
    const yesScale = Math.min(1.28, 1 + noClicks * 0.045);
    noButton.style.transform = `scale(${noScale})`;
    yesButton.style.transform = `scale(${yesScale})`;
    response.textContent = messages[noClicks - 1];

    if (noClicks === messages.length) {
        noButton.disabled = true;
        noButton.textContent = "Non (en pause)";
    }
});

yesButton.addEventListener("click", () => {
    question.innerHTML = "<span>Tous mes jours seront plus beaux</span><span>depuis que tu as dit oui !</span><span class=\"poem-question\">À nous les jolis souvenirs ! ♡</span>";
    response.textContent = "Youpi ! J’ai hâte de partager ce moment avec toi 🥰";
    noButton.hidden = true;
    yesButton.disabled = true;
    yesButton.style.transform = "scale(1)";
    yesButton.textContent = "Ouiii ! 💖";
    card.classList.add("is-celebrating");
    document.body.classList.add("has-said-yes");
    launchCelebration();
});

function launchCelebration() {
    const heartSymbols = ["♥", "♡", "💕", "💖", "✦"];
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 36; index += 1) {
        const heart = document.createElement("span");
        heart.className = "celebration-heart";
        heart.textContent = heartSymbols[index % heartSymbols.length];
        heart.style.setProperty("--left", `${Math.random() * 100}%`);
        heart.style.setProperty("--delay", `${Math.random() * 1.4}s`);
        heart.style.setProperty("--duration", `${3 + Math.random() * 2}s`);
        heart.style.setProperty("--size", `${1 + Math.random() * 2}rem`);
        fragment.appendChild(heart);
    }

    celebration.replaceChildren(fragment);
    window.setTimeout(() => celebration.replaceChildren(), 6000);
}