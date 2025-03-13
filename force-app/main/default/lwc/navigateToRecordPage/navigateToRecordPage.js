import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToRecordViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003Hy00000zy0hyIAA',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

    navigateToRecordEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003Hy00000zy0hyIAA',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }
}