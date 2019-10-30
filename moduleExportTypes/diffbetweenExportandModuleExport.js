//scenario1 both exports and module.exports will share the common memory as it is mutated
exports.addfun = function(){
    console.log("mutate exports object")
}
console.log(exports);
console.log(module.exports);

//scenario2 both exports  will have different memory as it is overidden 

exports = function(){
    console.log("Hello");
}
console.log(exports);
console.log(module.exports);

//whatever require will return module.exports so better to use module.exports instead od exports
//we have access to module object as it is enclosed inside a function signature in wrapper(c++ code will be called with this wrapper)