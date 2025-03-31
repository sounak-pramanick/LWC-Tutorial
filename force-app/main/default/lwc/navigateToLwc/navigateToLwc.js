import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    navigateToLwc() {
        let definition = {
            componentDef: 'c:navigationLwcTarget',
            attributes: {
                recordId: '1234567890'
            }
        };
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        });
    }
}