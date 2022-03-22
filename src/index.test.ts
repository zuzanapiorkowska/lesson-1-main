class TurboNumber {
  givenNumber: number;
  constructor(givenNumber: number){
    this.givenNumber = givenNumber;
  }
  subtract (number: number): TurboNumber {
    this.givenNumber -= number;
    return this;
  }

  divide (number: number): TurboNumber {
    this.givenNumber /= number; 
    return this;
  }

  result(): number {
    return this.givenNumber;
  }
}

describe(TurboNumber.name, () => {
  it("correctly subtracts 5 from 10", () => {
    //when
    const tn = new TurboNumber(10);
    tn.subtract(5);
    //then
    expect(tn.result()).toBe(5);
  });

  it("correctly divides 10 by 2", () => {
    const tn = new TurboNumber(10);
    tn.divide(2);
    expect(tn.result()).toBe(5);
  })

  it("correctly chains substract, divide and result", ()=> {
    const tn = new TurboNumber(10).divide(2).subtract(3).result();
    expect(tn).toBe(2);
  })
});

