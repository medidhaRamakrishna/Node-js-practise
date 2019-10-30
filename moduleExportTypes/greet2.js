//approach2 assigning constructor function to exports object

function log(){
    this.name = "John logged from approch 2",
    this.logInfo = function(){
        console.log(this.name);
    }
}

module.exports = log;