class TurboNumber {
  givenNumber: number;
  constructor(givenNumber: number){
    this.givenNumber = givenNumber;
  }
  subtract (number: number): void {
    this.givenNumber -= number
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
});
