export class TurboNumber {
  givenNumber: number;
  constructor(givenNumber: number) {
    this.givenNumber = givenNumber;
  }
  subtract(number: number): TurboNumber {
    this.givenNumber -= number;
    return this;
  }

  divide(number: number): TurboNumber {
    if (number === 0)
      throw new Error("Cannot divide by 0");
    this.givenNumber /= number;
    return this;
  }

  result(): number {
    return this.givenNumber;
  }
}
