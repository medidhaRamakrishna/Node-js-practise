var greet = require("./data.json");

var sayHello = function(){
    console.log(greet.en);
};
module.exports = sayHello;