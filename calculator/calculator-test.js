
it('should calculate the monthly rate correctly', function () {
  const values={
    amount: 125000,
    years: 15,
    rate: 9
  };
   expect(calculateMonthlyPayment(values)).toBe('1267.83');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 500000,
    years: 30,
    rate: 2.5
  }
  expect(calculateMonthlyPayment(values)).toBe('1975.60');
});


/// etc
