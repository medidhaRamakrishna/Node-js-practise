//approach1 this way we are creating one instance of the exports object
//observe below example
var greet = require("./greet1");
greet.logInfo();
greet.name = "session altered by other user";
greet.logInfo();

//approach2 this way we are  creating multiple instances of the exports object
//observe below example

var greet1 = require("./greet2");
var greetObj = new greet1();
greetObj.logInfo();
greetObj.name = "Name changed by someone";
var greetObj2 = new greet1();
greetObj2.logInfo();

//approach 3
var greet1 = require("./greet3");
var obj = new greet1();
obj.logInfo();

//difference between export and module.export
//both will point to the same memory location but if you assign somthing to exort(exports =) it will be using different memory
//so if you want to use export mutate the export object(exports.fun = function(){})
var obj = require("./diffbetweenExportandModuleExport");

