import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationLwcTarget extends NavigationMixin(LightningElement) {
    @api recordId;

    navigateBack() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Navigation'
            }
        });
    }
}