var j_str = '{"firstname":"simon"}';
var j_obj = JSON.parse(j_str);
console.log(j_obj);
console.log(j_str);
j_obj['lastname'] = "wells";

var s = JSON.stringify(j_obj);
console.log(s);
console.log(j_obj)