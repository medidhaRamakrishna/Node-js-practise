var myEvents = require('./custom.events');
let customEvents = new myEvents();
customEvents.subscribe("sayHello",()=>{
    console.log("Hello Event");
});

customEvents.subscribe("sayHello",()=>{
    console.log("Hello Event2");
});
customEvents.unSubscribe("sayHello");
customEvents.subscribe("sayHello",()=>{
    console.log("Hello Event3");
});
customEvents.publish("sayHello")