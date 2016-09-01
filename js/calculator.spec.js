/*eslint-disable*/

describe('Tests', function() {

    it('should add two numbers', function() {
        expect(Calculator.add(1, 1)).toBe(2);
    });

    it('should throw error when add', function() {
        expect(Calculator.add.bind(null, 1,"z")).toThrow();
    });

    it('should not add two numbers - a is NaN', function() {
        expect(Calculator.add.bind(null, NaN, 1)).toThrow();
    });

    it('should not add two numbers - b is NaN', function() {
        expect(Calculator.add.bind(null, 1, NaN)).toThrow();
    });

    it('should substract two numbers', function() {
        expect(Calculator.substract(1, 1)).toBe(0);
    });

    it('should throw error when substract', function() {
        expect(Calculator.substract.bind(null, 1, 'z')).toThrow();
    });

    it('should multiply two numbers', function() {
        expect(Calculator.multiply(1, 2)).toBe(2);
    });

    it('should multiply by zero', function() {
        expect(Calculator.multiply(0, 2)).toBe(0);
    });

    it('should throw error when multiply', function() {
        expect(Calculator.multiply.bind(null, 1, 'z')).toThrow();
    });

    it('should divide two numbers', function() {
        expect(Calculator.divide(2, 1)).toBe(2);
    });

    it('should throw error when divide', function() {
        expect(Calculator.divide.bind(null, 1, 'z')).toThrow();
    });

    it('should not divide by zero', function() {
        expect(Calculator.divide.bind(null,2, 0)).toThrow();
    });

    it('should factorial a number', function() {
        expect(Calculator.factorial(3)).toBe(6);
    });

    it('should throw error when factorial', function() {
        expect(Calculator.factorial.bind(null, 'z')).toThrow();
    });

    it('should modulo two numbers', function() {
        expect(Calculator.modulo(5, 3)).toBe(2);
    });

    it('should throw error when modulo', function() {
        expect(Calculator.modulo.bind(null, 1, 'z')).toThrow();
    });
});
