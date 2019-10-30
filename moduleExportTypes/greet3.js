//approach3 assigning anonymous function to exports object


module.exports = function(){
    this.name = "John logged from approch 3",
    this.logInfo = function(){
        console.log(this.name);
    }
}

