import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {APPLICATION_SCOPE, MessageContext, publish, subscribe, unsubscribe} from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    receivedMessage;
    subscription;
    inputValue;
    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No message published";
    }

    unsubscribeMessage() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    subscribeButton() {
        this.subscribeMessage();
    }

    inputHandler(event) {
        this.inputValue = event.target.value;
    }

    publishMessage() {
        const message = {
            lmsData: {
                value: this.inputValue
            }
        };
        publish(this.context, SAMPLEMC, message);
    }
}