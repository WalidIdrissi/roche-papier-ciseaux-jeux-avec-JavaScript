const moi = document.getElementById("moi");
const robo = document.getElementById("robo");
const reselta = document.getElementById("reselta");
const moiProfit = document.getElementById("moiProfit");
const roboProfit = document.getElementById("roboProfit");
const egalite = document.getElementById("egalite");

let moiProfitInitiale = 0;
let roboProfitInitiale = 0;
let egaliteInitiale = 0;
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
        moiProfitInitiale++;
        moiProfit.textContent = `Moi: ${moiProfitInitiale}`;
    } else if (
        (monChoix === "👊" && roboChoix === 2) ||
        (monChoix === "🖐" && roboChoix === 3) ||
        (monChoix === "✌" && roboChoix === 1)
    ) {
        reselta.textContent = "Le robot est gagné ! 🤖";
        roboProfitInitiale++;
        roboProfit.textContent = `Robo: ${roboProfitInitiale}`;
    } else {
        reselta.textContent = "Égalité ! 🤝";
        egaliteInitiale++;
        egalite.textContent = `Égalité: ${egaliteInitiale}`;
    }
        if (moiProfitInitiale > roboProfitInitiale) {
        moiProfit.style.color = "green";
        roboProfit.style.color = "black";
    } else if (roboProfitInitiale > moiProfitInitiale) {
        roboProfit.style.color = "red";
        moiProfit.style.color = "black";
    } else {
        moiProfit.style.color = "black";
        roboProfit.style.color = "black";
    }
}
