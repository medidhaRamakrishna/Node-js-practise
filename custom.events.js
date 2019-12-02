//Using Classes in ES6
module.exports = myEvents;
class myEvents {
constructor(){
    this.customEvents = {};
}
    subscribe(eventName,callback){
        if(this.customEvents[eventName]) {
            this.customEvents[eventName].push(callback);
            return;
        }
        this.customEvents[eventName] = [callback];

}
    publish(eventName){
        this.customEvents[eventName] && this.customEvents[eventName].forEach((callback)=>{
            callback && callback.apply();
        })
    }
    unSubscribe(eventName){
        console.log(this.customEvents)
        if(this.customEvents[eventName] && this.customEvents[eventName].length) this.customEvents[eventName] = [];
    }
    unSubscirbeAll(){
        this.customEvents = {};
    }
}

/* using functions
var  MyEvents = function(){
    this.customEvents = {};
}
MyEvents.prototype.subscribe = function(eventName,callback){
    if(this.customEvents[eventName]){
        this.customEvents[eventName].push(callback);
        return;
    }
    this.customEvents[eventName] = [callback];
}
MyEvents.prototype.publish = function(eventName){
    this.customEvents[eventName] && this.customEvents[eventName].forEach((callback)=>{
        callback && callback.apply();
    })
}
MyEvents.prototype.unSubscribe = function(eventName){
    console.log(this.customEvents)
     if(this.customEvents && this.customEvents[eventName].length) this.customEvents[eventName] = [];
}
MyEvents.prototype.unSubscirbeAll =function(){
    this.customEvents = {};
}
module.exports = MyEvents;*/

