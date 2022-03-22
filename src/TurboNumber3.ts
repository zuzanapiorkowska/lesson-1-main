export class TurboNumber3 {
  inputNumber: number;
  constructor(inputNumber: number) {
    this.inputNumber = inputNumber;
  }

  subtract(number: number): TurboNumber3 {
    this.inputNumber -= number;
    return this;
  }

  divide(number: number): TurboNumber3 {
    if (number === 0)
      throw new Error("Cannot divide by 0");
    this.inputNumber /= number;
    return this;
  }

  result(): number {
    return this.inputNumber;
  }
}
