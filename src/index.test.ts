import { TurboNumber } from "./index";

describe(TurboNumber.name, () => {
  it("divides", () => {
    //when
    const turboNumber = new TurboNumber(10);
    turboNumber.divide(5);

    //then
    expect(turboNumber.result()).toBe(2);
  });

  it("substracts", () => {
    //when
    const turboNumber = new TurboNumber(10);
    turboNumber.substract(5);

    expect(turboNumber.result()).toBe(5);
  });

  it("throws error when trying to divide by 0", () => {
    //when
    const turboNumber = new TurboNumber(10);
    //then
    expect(() => turboNumber.divide(0)).toThrow("Cannot divide by 0");
  });

});

//  exception - oczekujemy, ale są wyjątkowe
//  error - nie przewidujemy

//w JS największy iniger ma 64 bity, a nawet 65, bo jeden jest używany jako -+
//Number.MAX_SAFE_INTIGER
