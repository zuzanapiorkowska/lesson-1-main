import { TurboNumber } from "./TurboNumber";
import { TurboNumber2 } from "./TurboNumber2";

describe.skip(TurboNumber.name, () => {
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
  });

  it("correctly chains substract, divide and result", () => {
    const tn = new TurboNumber(10).divide(2).subtract(3).result();
    expect(tn).toBe(2);
  });

  it("throws error when dividing by 0", () => {
    const tn = new TurboNumber(10);
    expect(() => tn.divide(0)).toThrow("Cannot divide by 0");
  });
});

let ts: TurboNumber;
describe.skip(TurboNumber2.name, () => {
  beforeEach(() => {
    ts = new TurboNumber(10);
  }),
    [
      { number: 2, result: 8 },
      { number: -3, result: 13 },
      { number: 0, result: 10 },
    ].forEach(({ number, result }) => {
      it(`10 minus ${number} should return ${result}`, () => {
        //when
        ts.subtract(number);
        //then
        expect(ts.result()).toBe(result);
      });
    }),
    [
      { number: 2, result: 5 },
      { number: -5, result: -2 },
    ].forEach(({ number, result }) => {
      it(`10 divided by ${number} should return ${result}`, () => {
        //when
        const ts = new TurboNumber2(10);
        ts.divide(number);
        //then
        expect(ts.result()).toBe(result);
      });
    }),
    it("chains multiple operations", () => {
      expect(new TurboNumber2(10).divide(2).subtract(3).result()).toBe(2);
    });
});

class TurboNumber3 {
  inputNumber: number;
  constructor(inputNumber: number) {
    this.inputNumber = inputNumber;
  }

  subtract(number: number): void {
    this.inputNumber -= number;
  }

  result(): number {
    return this.inputNumber;
  }
}

describe(TurboNumber3.name, () => {
  test.each([
    { givenNumber: 2, result: 8 },
    { givenNumber: -3, result: 13 },
    { givenNumber: 0, result: 10 },
  ])(`10 minus $givenNumber shuold give $result`, ({ givenNumber, result }) => {
    const tn = new TurboNumber3(10);
    tn.subtract(givenNumber);
    expect(tn.result()).toBe(result);
  });
});
