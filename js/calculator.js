"use strict";

var
    isOfValidType = function(a, b) {
        return (typeof a == "number" && typeof b == "number" && !isNaN(a) && !isNaN(b));
    },
    Calculator = (function() {

        var self = this,
            _privateAdd = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a + b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            _privateSubstract = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a - b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            _privateMultiply = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a * b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            _privateDivide = function(a, b) {
                if (isOfValidType(a, b) && b != 0) {
                    return a / b;
                } else if (b === 0) {
                    throw new Error("Cannot divide by 0");
                } else {
                    throw new Error("Input not a number");
                }
            },
            _privateFactorial = function(a) {
                if (a === 1) {
                    return 1;
                } else if (typeof a != "number" && !isNaN(a)) {
                    throw new Error("Input not a number");
                } else {
                    return _privateFactorial(a - 1) * a;
                }
            },
            _privateModulo = function(a, b) {
                if (isOfValidType(a, b)) {
                    return a % b;
                } else {
                    throw new Error("Input not a number");
                }
            };

        return {
            add: function(a, b) {
                return _privateAdd(a, b);
            },
            substract: function(a, b) {
                return _privateSubstract(a, b);
            },
            multiply: function(a, b) {
                return _privateMultiply(a, b);
            },
            divide: function(a, b) {
                return _privateDivide(a, b);
            },
            factorial: function(a) {
                return _privateFactorial(a);
            },
            modulo: function(a, b) {
                return _privateModulo(a, b);
            }
        };
    })();
