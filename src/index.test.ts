describe(Turbonumber.name, () => {
  it("correctly subtracts 5 from 10", () => {
    //when
    tn = new TurboNumber(10);
    tn.subtract(10);
    expect(tn.result).toBe(5);
  });
});
