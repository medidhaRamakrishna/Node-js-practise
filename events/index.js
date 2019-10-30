//custom implementation usage
let emitter = require("./emitter");
let eventsConfig = require("./config").events;
let evntEmit = new emitter();
evntEmit.on('add',function(){
    console.log("add event triggered");
})
evntEmit.on('add',function(){
    console.log("fetched event triggered");
})

evntEmit.emit("add");

//node inbuilt events
let Emitter = require("events");
let emiter = new Emitter();

emiter.on(eventsConfig.ADD,function(){
    console.log("add event triggered");
})

emiter.on(eventsConfig.ADD,function(){
    console.log("add2event triggered");
});

emiter.emit(eventsConfig.ADD);