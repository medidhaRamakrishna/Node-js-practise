function user(name) {
    this.fullName = name;
}
user.prototype.greetUser = function () {
    console.log("Hello " + this.fullName);
}

var user1 = new user("Abdul Kalam");
user1.greetUser();
console.log(user.__proto__);

//Object inheritance
let Person = {
    firstName: "",
    lastName: "",
    greet: function () {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

//inheriting from person object
var ram = Object.create(Person);
ram.firstName = "ram";
ram.lastName = "ram";
ram.one = "one";
//inheriting from person object
var raj = Object.create(Person);
raj.firstName = "raj";
raj.lastName = "raj";
raj.two = "two";

ram.greet();
raj.greet();

