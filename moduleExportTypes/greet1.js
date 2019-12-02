//approach1 assigning instantiated object 
//this module single instance will be shared in all the places where it is using by require("./greet1")
function log(){
    this.name = "John logged approch 1",
    this.logInfo = function(){
        console.log(this.name);
    }
}

module.exports = new log();