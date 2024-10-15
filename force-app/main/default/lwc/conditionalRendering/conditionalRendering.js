import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;

    handleClick() {
        this.isVisible = !this.isVisible;
    }
}