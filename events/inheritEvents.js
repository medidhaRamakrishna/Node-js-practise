let Emitter = require("events");
let util = require("util");

function wishes(festival){
    this.msg = "Happy "+festival;
}
wishes.prototype.log = ()=>console.log(this.msg);
//inheriting emitter to wishes so the instances will have access to events
util.inherits(wishes,Emitter);

var newYearWish = new wishes("New Year");

newYearWish.on("start",(festival)=>{
    console.log(festival +" has stared");
});

newYearWish.emit("start","New Year");