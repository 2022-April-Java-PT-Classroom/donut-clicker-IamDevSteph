import DonutClicker from "./DonutClicker";

const DonutClickerShop = new DonutClicker(0, 0 , 100, 0, 0, 0);
const totalDonuts = document.querySelector('.totalDonuts');
const donutBtn = document.querySelector('.donutBtn');
const totalAutoClickers = document.querySelector('.autoClickerBtn');
const multiplierScan = document.querySelector('.multiplierBtn');

renderPage();
function renderPage(){
    applyDonut();
    applyAutoClicker();
    updateTotals();
}

function applyDonut(){
    
    donutBtn.addEventListener('click', ()=>{
        DonutClickerShop.addDonut();
        totalDonuts.innerText = DonutClickerShop.numDonuts;
        updateTotals();
        
        // displayDonutStats(addDonutPerClick, addAutoclicker, addDonutMultiplier)
    });
}
function applyAutoClicker(){
    autoClickerBtn.addEventListener('click', ()=>{
        DonutClickerShop.addAutoclicker();
        totalAutoClickers.innerText = DonutClickerShop.numAutoclickers;
        setInterval(addAutoclicker, 1000);
        updateTotals();
    });
}
function applyMultiplier(){
    multiplierScan.addEventListener('click', ()=>{
        DonutClickerShop.addDonutMultiplier();
        multiplierScan.innerText = DonutClickerShop.donutMultiplier;
    })
}
function updateTotals(){
    totalDonuts.innerText = "Donuts: " + DonutClickerShop.totalDonuts();
    totalAutoClickers.innerText = "AutoClickers: " + DonutClickerShop.totalAutoClickers();
}