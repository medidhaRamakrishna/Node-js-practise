function value(a){
a =10;
}
var a =20;
value(a);
console.log(a);


function reference(obj){
    obj.prop1 = function(){};
    obj.prop2 = function(){};
}
var obj = {};
obj.prop1 = "Hello";
reference(obj);
console.log(obj);

//IIFE
var name = " outerSide";
(function(){
var name = " Inside IIFE";
console.log("I am a IIFE function"+name);
})();

console.log("outside function"+name);
