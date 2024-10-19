import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, publish, subscribe} from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue;
    receivedMessage;

    @wire(MessageContext)
    context;

    inputHandler(event) {
        this.inputValue = event.target.value;
    }

    publishMessage() {
        const message = {
            lmsData: {
                value: this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message);
    }

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        subscribe(this.context, SAMPLEMC, (message) => {this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "NO MESSAGE PUBLISHED";
    }
}