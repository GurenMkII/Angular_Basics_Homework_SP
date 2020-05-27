function sayHello(person: string): string {
    return "Hello, " + person;
    }
    var user = "Super Student";
    document.getElementById("para").innerHTML = sayHello(user);

    class Person {
        private firstName: string;
        private lastName: string;
        private age: number;
        private phoneNumber: number;
        private state: string;
        private zipCode: number;
        private occupation: string;
        private hourlyWage: number;
        private numOfHours: number;
        certifications: string[] = [];

        constructor(firstName: string, lastName: string, age: number, phoneNumber: number, state: string, zipCode: number, occupation: string, hourlyWage: number, numOfHours?: number) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.phoneNumber = phoneNumber;
            this.state = state;
            this.zipCode = zipCode;
            this.occupation = occupation;
            this.hourlyWage = hourlyWage;
            if (numOfHours){
                this.numOfHours = numOfHours;
            } else this.numOfHours = 40;
        }

        getFullName(): string{
            return this.firstName+" "+this.lastName;
        }
        getContactInfo(): string{
            return this.phoneNumber.toString()+" "+this.state+" "+this.zipCode.toString();
        }
        getInfo(): string{
            return this.age+" "+this.occupation;
        }
        getWeeklyIncome(): string{
            return (this.hourlyWage*this.numOfHours).toString();
        }
        getCerts(): string{
            let certs: string = this.certifications.toString();
            
            return certs;            
        }

        
    }
    
    interface PersonOptions {
        firstName: string;
        lastName: string;
        age?: number;
        phoneNumber?: number;
        state?: string;
        zipCode?: number;
        occupation?: string;
        hourlyWage?: number;
        numOfHours?: number;
        certifications?: string[];
    }

    function createPerson(option: PersonOptions): {firstName: string, lastName: string, age: number, occupation: string}{
        let newPerson = {firstName: "Bill", lastName: "Moore", age: 27, occupation: "Lawyer"};
        if(option.firstName){
            newPerson.firstName = option.firstName;
        }
        if(option.lastName){
            newPerson.lastName = option.lastName;
        }
        if(option.age){
            newPerson.age = option.age;
        }
        if (option.occupation){
            newPerson.occupation = option.occupation;
        }
        return newPerson;
    }

    let user3 = createPerson({firstName: "Gregg", lastName: "D'evill", age: 33});




    
    var user1 = new Person("James", "Bond", 40, 7045557777, "NC", 28227, "Banking", 47, 34);
    var user2 = new Person("Chris", "Williams", 21, 7041118264, "SC", 29708, "Retail", 12);
    
    
    function addCerts(person: Person, ...certifications: string[]){
        for (let i = 0; i < certifications.length; i++) {
            let length = person.certifications.push(certifications[i]);
            
        }
    }
    addCerts(user1, "MBA","MD","DR","PROF");
    
    function showCerts(person: Person): string{
        if (person.getCerts()){
            return person.getCerts();
        } else return "No certifications yet."
    }

    function showInfo(person: Person): string {
        return "<br>Hi, this is " + person.getFullName() +".<br>"
                +"Certifications: "+showCerts(person) +".<br>"
                +"Age/occupation: "+person.getInfo() +".<br>"
                +"Phone#/state/zip: "+person.getContactInfo() +".<br>"
                +"Weekly income: $"+person.getWeeklyIncome();
        }
    document.getElementById("div1").innerHTML = showInfo(user1);
    // document.getElementById("div1").innerHTML = showCerts(user1);
    // console.log(user1.certifications[1]);
    
    document.getElementById("div2").innerHTML = showInfo(user2);
    
    document.getElementById("div3").innerHTML = "<br>"+user3.lastName+" "+user3.occupation;



