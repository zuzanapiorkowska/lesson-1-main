export class TurboNumber {
  givenNumber: number;
  constructor(givenNumber: number) {
    this.givenNumber = givenNumber; 
  }

  substract(x: number): void {
    this.givenNumber = this.givenNumber - x;
  }

  divide(x: number): void {
    if (x === 0) throw new Error("Cannot divide by 0");
    this.givenNumber = this.givenNumber / x;
  }

  result() {
    return this.givenNumber;
  }
}

const a = new TurboNumber(10);
a.substract(4); //void
a.result; // 6
a.substract; //3
a.result; //3 

//jak sprawdzić czy wystąpił integer overflow bez wywoływania integer overflow?
//if (this.givenNumber - x > Number.MIN_SAFE_INTEGER) throw new Error("Out of range")