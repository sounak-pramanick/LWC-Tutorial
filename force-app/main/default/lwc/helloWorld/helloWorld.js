import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "John Doe";
    title = "Salesforce Developer";

    @track address = {
        city: "Kolkata",
        postcode: 700051,
        country: "India"
    }

    changeHandler(event) {
        this.title = event.target.value;
    }

    trackHandler(event) {
        this.address = {...this.address, city: event.target.value};
    }

    users = ['John', 'Jane', 'Jack', 'Jake', 'Jill'];
    i = 0;

    get getUsers() {
        return this.users[this.i];
    }

    changeName() {
        this.i++;
        if(this.i === 5) this.i = 0;
    }
}