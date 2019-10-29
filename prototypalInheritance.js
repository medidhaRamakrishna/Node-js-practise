function user(name){
    this.fullName = name;
}
user.prototype.greetUser =  function(){
    console.log("Hello "+this.fullName);
}

var user1 = new user("Abdul Kalam");
user1.greetUser();
console.log(user.__proto__);