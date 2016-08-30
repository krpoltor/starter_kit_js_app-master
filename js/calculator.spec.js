describe('Tests', function() {
      it('should add two numbers', function() {
        expect(calculator.add(1,1)).toBe(2);
      });

      it('should substract two numbers', function() {
        expect(calculator.substract(1,1)).toBe(0);
      });

      it('should multiply two numbers', function() {
        expect(calculator.multiply(1,2)).toBe(2);
      });

      it('should multiply by zero', function() {
        expect(calculator.multiply(0,2)).toBe(0);
      });

      it('should divide two numbers', function() {
        expect(calculator.divide(2,1)).toBe(2);
      });

      it('should not divide by zero', function() {
        expect(calculator.divide(2,0)).toBe(Infinity);
      });

      it('should factorial a number', function() {
        expect(calculator.factorial(3)).toBe(6);
      });
});
