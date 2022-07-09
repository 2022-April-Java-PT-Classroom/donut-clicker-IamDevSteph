import DonutClicker from "./DonutClicker";

const DonutClickerShop = new DonutClicker(0, 0 , 100, 0, 0, 0);
const totalDonuts = document.querySelector('.totalDonuts');
const donutBtn = document.querySelector('.donutBtn');
const autoClickerBtn = document.querySelector('.autoClickerBtn');
const multiplierScan = document.querySelector('.multiplierBtn');
const resetGameBtn = document.querySelector('.reset');
const resetGame = document.querySelector('.newGame');
const totalAutoClickers = document.querySelector('.totalAutoClickers')

updateTotals();

resetGameBtn.addEventListener('click', ()=>{
    DonutClickerShop.resetGame();
    alert('Are you sure you want to reset your stats?')
    if(confirm("Choose wisely")) {
        txt = "You have reset your game";
    } else{
        txt = "You decided to continue your journey";
    }
})

donutBtn.addEventListener('click', ()=>{
    DonutClickerShop.addDonut();
    totalDonuts.innerText = "Donuts: " + DonutClickerShop.numDonuts;
    console.log("this is working");
    updateTotals();
});


autoClickerBtn.addEventListener('click', ()=>{
    DonutClickerShop.addAutoclicker();
    setInterval(numAutoclickers, 1000);
    updateTotals();
    });


multiplierScan.addEventListener('click', ()=>{
    DonutClickerShop.addDonutMultiplier();
    updateTotals();
    })


function updateTotals(){
    totalDonuts.innerText = "Donuts: " + DonutClickerShop.numDonuts;
    totalAutoClickers.innerText = "AutoClickers: " + DonutClickerShop.numAutoclickers;
    multiplierScan.innerText = "Multipliers applied: " + DonutClickerShop.donutMultiplier;
}