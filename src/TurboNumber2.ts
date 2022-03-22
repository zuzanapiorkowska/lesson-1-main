export class TurboNumber2 {
  givenNumber: number;
  constructor(givenNumber: number) {
    this.givenNumber = givenNumber;
  }

  subtract(number: number): TurboNumber2 {
    this.givenNumber -= number;
    return this;
  }

  divide(number: number): TurboNumber2 {
    this.givenNumber /= number;
    return this;
  }

  result() {
    return this.givenNumber;
  }
}
