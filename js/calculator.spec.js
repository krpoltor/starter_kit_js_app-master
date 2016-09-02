/*eslint-disable*/

describe('Tests', function() {

    it('should add two numbers', function() {
        expect(calculator.add(1, 1)).toBe(2);
    });

    it('should throw error when add', function() {
        expect(calculator.add.bind(null, 1,"z")).toThrow(new Error("Input not a number."));
    });

    it('should not add two numbers - a is NaN', function() {
        expect(calculator.add.bind(null, NaN, 1)).toThrow(new Error("Input not a number."));
    });

    it('should not add two numbers - b is NaN', function() {
        expect(calculator.add.bind(null, 1, NaN)).toThrow(new Error("Input not a number."));
    });

    it('should substract two numbers', function() {
        expect(calculator.substract(1, 1)).toBe(0);
    });

    it('should throw error when substract', function() {
        expect(calculator.substract.bind(null, 1, 'z')).toThrow(new Error("Input not a number."));
    });

    it('should multiply two numbers', function() {
        expect(calculator.multiply(1, 2)).toBe(2);
    });

    it('should multiply by zero', function() {
        expect(calculator.multiply(0, 2)).toBe(0);
    });

    it('should throw error when multiply', function() {
        expect(calculator.multiply.bind(null, 1, 'z')).toThrow(new Error("Input not a number."));
    });

    it('should divide two numbers', function() {
        expect(calculator.divide(2, 1)).toBe(2);
    });

    it('should throw error when divide', function() {
        expect(calculator.divide.bind(null, 1, 'z')).toThrow(new Error("Input not a number."));
    });

    it('should not divide by zero', function() {
        expect(calculator.divide.bind(null,2, 0)).toThrow(new Error("Cannot divide by 0"));
    });

    it('should factorial a number', function() {
        expect(calculator.factorial(3)).toBe(6);
    });

    it('should throw error when factorial', function() {
        expect(calculator.factorial.bind(null, 'z')).toThrow(new Error("Input not a number."));
    });

    it('should modulo two numbers', function() {
        expect(calculator.modulo(5, 3)).toBe(2);
    });

    it('should throw error when modulo', function() {
        expect(calculator.modulo.bind(null, 1, 'z')).toThrow(new Error("Input not a number."));
    });
});
