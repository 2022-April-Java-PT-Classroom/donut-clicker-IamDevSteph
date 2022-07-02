class DonutClicker {

    constructor(numDonuts, numAutoclickers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
    }

    addDonut(){
        this.numDonuts +=1;
    }
    addAutoclicker(){
        if(this.numDonuts >=100){
        this.numDonuts -= 100;
        this.numAutoclickers += 1;
        }
    }
}


export default DonutClicker;
