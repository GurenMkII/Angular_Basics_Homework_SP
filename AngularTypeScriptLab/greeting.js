function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, numOfHours) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (numOfHours) {
            this.numOfHours = numOfHours;
        }
        else
            this.numOfHours = 40;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getContactInfo = function () {
        return this.phoneNumber.toString() + " " + this.state + " " + this.zipCode.toString();
    };
    Person.prototype.getInfo = function () {
        return this.age + " " + this.occupation;
    };
    Person.prototype.getWeeklyIncome = function () {
        return (this.hourlyWage * this.numOfHours).toString();
    };
    Person.prototype.getCerts = function () {
        var certs = this.certifications.toString();
        return certs;
    };
    return Person;
}());
function createPerson(option) {
    var newPerson = { firstName: "Bill", lastName: "Moore", age: 27, occupation: "Lawyer" };
    if (option.firstName) {
        newPerson.firstName = option.firstName;
    }
    if (option.lastName) {
        newPerson.lastName = option.lastName;
    }
    if (option.age) {
        newPerson.age = option.age;
    }
    if (option.occupation) {
        newPerson.occupation = option.occupation;
    }
    return newPerson;
}
var user3 = createPerson({ firstName: "Gregg", lastName: "D'evill", age: 33 });
var user1 = new Person("James", "Bond", 40, 7045557777, "NC", 28227, "Banking", 47, 34);
var user2 = new Person("Chris", "Williams", 21, 7041118264, "SC", 29708, "Retail", 12);
function addCerts(person) {
    var certifications = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        certifications[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < certifications.length; i++) {
        var length_1 = person.certifications.push(certifications[i]);
    }
}
addCerts(user1, "MBA", "MD", "DR", "PROF");
function showCerts(person) {
    if (person.getCerts()) {
        return person.getCerts();
    }
    else
        return "No certifications yet.";
}
function showInfo(person) {
    return "<br>Hi, this is " + person.getFullName() + ".<br>"
        + "Certifications: " + showCerts(person) + ".<br>"
        + "Age/occupation: " + person.getInfo() + ".<br>"
        + "Phone#/state/zip: " + person.getContactInfo() + ".<br>"
        + "Weekly income: $" + person.getWeeklyIncome();
}
document.getElementById("div1").innerHTML = showInfo(user1);
// document.getElementById("div1").innerHTML = showCerts(user1);
// console.log(user1.certifications[1]);
document.getElementById("div2").innerHTML = showInfo(user2);
document.getElementById("div3").innerHTML = "<br>" + user3.lastName + " " + user3.occupation;
