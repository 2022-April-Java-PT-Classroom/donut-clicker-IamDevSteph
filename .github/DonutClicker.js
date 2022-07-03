class DonutClicker {

    constructor(numDonuts, numAutoclickers, clickerCost){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.clickerCost = clickerCost;
    }

    addDonut(){
        this.numDonuts +=1;
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
}


export default DonutClicker;
