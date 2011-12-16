//Russell Carlin
//SDI 1112
//Project 4
//var mahLib = function(v) {   
var tests = {
    //string - tests the string against the pattern
    phoneNumber: function(n) {
        var p = /^(\d{3})-(\d{3})-(\d{4})$/;  
        return p.test(n);  
    },
    //string - tests the string against the pattern
    email: function(n) {
        var p = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return p.test(n)
    },
    //string - tests if the string starts with http: or https:
    URL: function(n) {
        var p = /^(http:|https:)/
        return p.test(n)
    },
    //string - splits into words, takes first letter of each word, caps it, puts it all back together
    upCase: function(n) {
        var p = n.split(" ")
        for (i=0, l=p.length;i<l;i++) {
            p[i] = p[i].slice(0,1).toUpperCase() + p[i].slice(1);
        };
        return p.join(" ")
    },
    //string, sparator, new separator - seperates by the given separator, joins them with new separator
    separator: function(n,s,i) {
        var p = n.split(s)
        return p.join(i)
    },
    //Project 1 missed a math equation
    //number - creates a fixed 2 digit decimal
    decimal: function(n) {
        return n.toFixed(2)
    },
    //Project 1 missed a string escape
    //number, number to compare to, percent margin of error - finds the margin of error, true if both ends are true, false if one is not true
    fuzzy: function(n,s,i) {
        var l = s*i
        if ((n >= s-l) && (n <= s+l)) {
            return true
        } else {
            return false
        };
    }
};

console.log(tests.phoneNumber("123-456-7890"))
console.log(tests.email("IamBob@derp.org"))
console.log(tests.URL("https://www.arrow2knee.com"))
console.log(tests.upCase("Hello, how are you?"))
console.log(tests.separator("chicken/bacon/ranch", "/", ","))
console.log(tests.decimal(9001.1111111))
console.log(tests.fuzzy(7,10,.4))

