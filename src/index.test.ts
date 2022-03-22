import { TurboNumber } from "./TurboNumber";
import { TurboNumber2 } from "./TurboNumber2";
import { TurboNumber3 } from "./TurboNumber3";

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

describe(TurboNumber3.name, () => {
  let tn: TurboNumber3;
  beforeEach(()=>{
    tn = new TurboNumber3(10);
  })
  test.each([
    { givenNumber: 2, result: 8 },
    { givenNumber: -3, result: 13 },
    { givenNumber: 0, result: 10 },
  ])(`10 minus $givenNumber shuold give $result`, ({ givenNumber, result }) => {
    tn.subtract(givenNumber);
    expect(tn.result()).toBe(result);
  }),
    test.each([
      { givenNumber: 2, result: 5 },
      { givenNumber: -2, result: -5 },
    ])(
      `10 divided by $givenNumber shuold give $result`,
      ({ givenNumber, result }) => {
        tn.divide(givenNumber);
        expect(tn.result()).toBe(result);
      }
    );

  it("should throw error", () => {
    //given
    expect(() => tn.divide(0)).toThrow("Cannot divide by 0");
  });

  it("should chain operations", () => {
    expect(tn.subtract(2).divide(2).result()).toBe(4);
  })
});
