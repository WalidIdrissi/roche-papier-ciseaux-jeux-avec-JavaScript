const moi = document.getElementById("moi");
const robo = document.getElementById("robo");
const reselta = document.getElementById("reselta");
let roboChoix;
function jeux(monChoix) {
    moi.textContent = `Moi: ${monChoix}`;

    roboChoix = Math.floor(Math.random() * 3) + 1;
    if (roboChoix === 1) {
        robo.textContent = `Robo: 👊`;
    } else if (roboChoix === 2) {
        robo.textContent = `Robo: 🖐`;
    } else if (roboChoix === 3) {
        robo.textContent = `Robo: ✌`;
    }

    if (
        (monChoix === "👊" && roboChoix === 3) ||
        (monChoix === "🖐" && roboChoix === 1) ||
        (monChoix === "✌" && roboChoix === 2)
    ) {
        reselta.textContent = "Tu as gagné ! 🎉";
    } else if (
        (monChoix === "👊" && roboChoix === 2) ||
        (monChoix === "🖐" && roboChoix === 3) ||
        (monChoix === "✌" && roboChoix === 1)
    ) {
        reselta.textContent = "Le robot a gagné ! 🤖";
    } else {
        reselta.textContent = "Égalité ! 🤝";
    }
}
