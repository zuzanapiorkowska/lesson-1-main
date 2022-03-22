import { exitCode } from "process";
import { isFloat32Array } from "util/types";
import { TurboNumber } from "./index";


describe(TurboNumber.name, () => {
  let turboNumber: TurboNumber;
beforeEach(()=> {
  turboNumber = new TurboNumber(10);
})
  it("divides", () => {

    //then
    expect(turboNumber.divide(5).result()).toBe(2);
  });

  it("subtracts", () => {

    //when
    turboNumber.subtract(5);

    expect(turboNumber.result()).toBe(5);
  });

  it("throws error when trying to divide by 0", () => {

    expect(() => turboNumber.divide(0)).toThrow("Cannot divide by 0");
  });

  it("subtracts and divides", ()=> {
     //when
     const result = new TurboNumber(17).subtract(5).divide(-3).result();
     //then
     expect(result).toBe(-4);
  });

});

//  exception - oczekujemy, ale są wyjątkowe
//  error - nie przewidujemy

//w JS największy iniger ma 64 bity, a nawet 65, bo jeden jest używany jako -+
//Number.MAX_SAFE_INTIGER
//templatki na githubie?

//jest ma funkcje
//beforeEach i afterEach - możemy je ustawiać i wewnątrz i na zewnątrz describe i to tez będzie wpływało na koljeność i może też być kilka beforeEachy i beforeAllów

//git ammend
//jak zmienić nazwę commitów?

//jest coverage --coverage - branches to są drogi, jakimi może pójść kod z obsługą wyjątków. Jak 1 edge case, to 1 branch
// branche dotyczą jakiegokolwiek isFloat32Array, switcha etc.

//statement -> ast - abstract syntax tree

//plugin???

//gdzie beforeEach? - wewnątrz describe'a będzie lepiej zawsze, chyba że używam go w róznych describe'ach, ale pytanie czy nie musze złączyć tych describe'ów? 
