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
    upCase: function(n) {
        var p = n.split(" ")
        for (i=0, l=s.length;i<l;i++) {
            p[i] = p[i].slice(0,1).toUpperCase() + p[i].slice(1);
        };
        return p.join(" ")
    },
    separator: function(n,s,i) {
        var p = n.split(s)
        return p.join(i)
    }
};
console.log(tests.separator("bacon,chicken,sausage" , "," , "/"))
