"use strict";

var isOfValidType = function(a, b) {
        return (typeof a == "number" && typeof b == "number" && !isNaN(a) && !isNaN(b));
    },
    calculator = (function() {
        var _add = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a + b;
                } else {
                    throw new Error("Input not a number.");
                }
            },
            _substract = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a - b;
                } else {
                    throw new Error("Input not a number.");
                }
            },
            _multiply = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a * b;
                } else {
                    throw new Error("Input not a number.");
                }
            },
            _divide = function(a, b) {
                if (isOfValidType(a, b) && b != 0) {
                    return a / b;
                } else if (b === 0) {
                    throw new Error("Cannot divide by 0");
                } else {
                    throw new Error("Input not a number.");
                }
            },
            _factorial = function(a) {
                if (typeof a != "number" || isNaN(a)) {
                    throw new Error("Input not a number.");
                } else if (a === 1) {
                    return 1;
                } else {
                    return _factorial(a - 1) * a;
                }
            },
            _modulo = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a % b;
                } else {
                    throw new Error("Input not a number.");
                }
            };

        return {
            add: function(a, b) {
                return _add(a, b);
            },
            substract: function(a, b) {
                return _substract(a, b);
            },
            multiply: function(a, b) {
                return _multiply(a, b);
            },
            divide: function(a, b) {
                return _divide(a, b);
            },
            factorial: function(a) {
                return _factorial(a);
            },
            modulo: function(a, b) {
                return _modulo(a, b);
            }
        };
    })();
