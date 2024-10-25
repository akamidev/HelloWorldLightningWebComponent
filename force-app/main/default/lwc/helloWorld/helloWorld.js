import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'Bonjour';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}