"use strict";

var
    isValidType = function(a, b) {
        return (typeof a == "number" && (typeof a === typeof b) && !isNaN(a) && !isNaN(b));
    },
    calculator = (function() {
        return {
            add: function(a, b) {
                if (isValidType(a, b)) {
                    return a + b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            substract: function(a, b) {
                if (isValidType(a, b)) {
                    return a - b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            multiply: function(a, b) {
                if (isValidType(a, b)) {
                    return a * b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            divide: function(a, b) {
                if (isValidType(a, b)) {
                    return a / b;
                } else {
                    throw new Error("Input not a number");
                }
            },
            factorial: function(a) {
                if (a === 1) {
                    return 1;
                } else if (typeof a != "number") {
                    throw new Error("Input not a number");
                } else {
                    return this.factorial(a - 1) * a;
                }
            },
            modulo: function(a, b) {
                if (isValidType(a, b)) {
                    return a % b;
                } else {
                    throw new Error("Input not a number");
                }
            }
        };
    })();
