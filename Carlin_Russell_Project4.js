//Russell Carlin
//SDI 1112
//Project 4
var mahLib = function(v) {
    var tests = {
        testPhoneNumber: function(n) {
            var p = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;  
            return p.test(n);  
        },
        testEmail: function(n) {
            var p = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return p.test(n)
        },
        testURL: function(n) {
            var p = /^(http:|https:)/
        }
    };
};
