export class Person {

    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(): string{
        return this.firstName;
    }
    getLastName(): string{
        return this.lastName;
    }

    setFirstName(firstName: string){
        this.firstName = firstName;
    }
    setLastName(lastName: string){
        this.lastName = lastName;
    }

}
