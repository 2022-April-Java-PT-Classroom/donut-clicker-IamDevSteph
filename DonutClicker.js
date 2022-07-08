class DonutClicker {

    constructor(numDonuts, numAutoclickers, clickerCost, multiplierCost, donutMultiplier, clickValue){
        this.numDonuts = numDonuts; //numDonuts is equal to amount of clicks user has made.
        this.numAutoclickers = numAutoclickers; //this is the total of autoclicker user has acquired.
        this.clickerCost = clickerCost; //this relates to the cost of a clicker.
        this.multiplierCost = 10; //this multiplies the cost amount of each autoclicker
        this.donutMultiplier = donutMultiplier; //total of multipliers
        this.clickValue = 1;
    }

    addDonut(){
        this.numDonuts += this.numAutoclickers >0 ? 1 * this.numAutoclickers: 1;
    }
    addAutoclicker(){
        if(this.numDonuts >=100){
        this.numDonuts -= 100;
        this.numAutoclickers += 1;
        }

        if(this.numAutoclickers >= 1){
        this.clickerCost += this.clickerCost * 0.1;
        }
    }
    
    addDonutMultiplier(){
        if(this.numDonuts >= this.multiplierCost){
        this.numDonuts -= this.multiplierCost;
        this.donutMultiplier++;
        this.multiplierCost = (this.multiplierCost * 1.1);
        this.clickValue = (Math.pow(1.2, this.donutMultiplier));
        }
    }
    

}


export default DonutClicker;
