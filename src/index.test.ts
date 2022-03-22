import { TurboNumber } from "./index";

describe(TurboNumber.name, () => {
  it("divides", () => {
    //when
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(5);

    //then
    expect(turboNumber.result()).toBe(2);
  });

  it("subtracts", () => {
    //when
    const turboNumber = new TurboNumber(10);
    turboNumber.subtract(5);

    expect(turboNumber.result()).toBe(5);
  });

  it("throws error when trying to divide by 0", () => {
    //when
    const turboNumber = new TurboNumber(10);
    //then
    expect(() => turboNumber.divide(0)).toThrow("Cannot divide by 0");
  });

  it("subtracts and divides", ()=> {
     //when
     const turboNumber = new TurboNumber(17).subtract(5).divide(-3).result();
     //then
     expect(turboNumber).toBe(-4);
  });

});

//  exception - oczekujemy, ale są wyjątkowe
//  error - nie przewidujemy

//w JS największy iniger ma 64 bity, a nawet 65, bo jeden jest używany jako -+
//Number.MAX_SAFE_INTIGER
//templatki na githubie?