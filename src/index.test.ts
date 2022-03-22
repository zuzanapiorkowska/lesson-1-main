import { TurboNumber } from "./TurboNumber"

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
  })

  it("correctly chains substract, divide and result", ()=> {
    const tn = new TurboNumber(10).divide(2).subtract(3).result();
    expect(tn).toBe(2);
  })

  it("throws error when dividing by 0", ()=> {
    const tn = new TurboNumber(10);
    expect(() =>tn.divide(0)).toThrow("Cannot divide by 0")
  })
});


describe(TurboNumber2.name, ()=> {
  [
    {number: 2, result: 8},
    {number: 3, result: 7},
    {number: 4, result: 6}
  ].forEach(({number, result}) =>
  it(`10 minus ${number} should return ${result}`, ()=>{
  
    //when
    const ts = new TurboNumber2(10);
    ts.substract(number);

    expect(ts.result()).toBe(result)
  })

})