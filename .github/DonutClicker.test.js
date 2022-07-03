import DonutClicker from "./DonutClicker";

describe("DonutClicker", () => {

    test("should be able to add a donut and retrieve the total count", () => {
        //Arrange
        const underTest = new DonutClicker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutClicker(100, 0);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });

    test("should NOT be able to purchase an autoclicker with 99 donuts", () => {
        const underTest = new DonutClicker(99,0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    })
    
    test("should increase the cost of the autoclicker by 10%", () => {
        const underTest = new DonutClicker(100, 1, 100);
        underTest.addAutoclicker();
        expect(underTest.clickerCost).toEqual(110);
        
    });

    test("should increase the cost of the autoclicker by 10%", () => {
        const underTest = new DonutClicker(100, 2, 110);
        underTest.addAutoclicker();
        expect(underTest.clickerCost).toEqual(121);
        
    });
})