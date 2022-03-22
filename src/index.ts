export class TurboNumber {
  givenNumber: number;
  constructor(givenNumber: number) {
    this.givenNumber = givenNumber; 
  }

  subtract(x: number): TurboNumber {
    this.givenNumber = this.givenNumber - x;
    return this;
  }

  divide(x: number): TurboNumber {
    if (x === 0) throw new Error("Cannot divide by 0");
    this.givenNumber = this.givenNumber / x;
    return this;
  }

  result(): number {
    return this.givenNumber;
  }
}

const a = new TurboNumber(10);
a.subtract(4); //void
a.result; // 6
a.subtract; //3
a.result; //3 

//jak sprawdzić czy wystąpił integer overflow bez wywoływania integer overflow?
//if (this.givenNumber - x > Number.MIN_SAFE_INTEGER) throw new Error("Out of range")