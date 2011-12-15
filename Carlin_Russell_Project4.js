//Russell Carlin
//SDI 1112
//Project 4
//var mahLib = function(v) {   
var tests = {
    phoneNumber: function(n) {
        var p = /^(\d{3})-(\d{3})-(\d{4})$/;  
        return p.test(n);  
    },
    email: function(n) {
        var p = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return p.test(n)
    },
    URL: function(n) {
        var p = /^(http:|https:)/
        return p.test(n)
    },
    tCase: function(n) {
        var s = n.split(" ")
        for (i=0, l=s.length;i<l;i++) {
            s[i] = s[i].slice(0,1).toUpperCase() + s[i].slice(1);
        };
        return s.join(" ")
    }
};
console.log(tests.tCase("Are you watching?"))
