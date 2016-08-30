'use strict';

var a,b, calculator = (function() {
    return {
        add: function(a, b) {
            return a + b;
        },
        substract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        },
        factorial: function(a) {
            if (a === 1) {
                return 1;
            } else {
                return this.factorial(a - 1) * a;
            }
        }
    };
})();
