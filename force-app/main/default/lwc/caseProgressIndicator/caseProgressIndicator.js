import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { api, LightningElement, track, wire } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASE_STATUS from '@salesforce/schema/Case.Status';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class CaseProgressIndicator extends LightningElement {
    @track caseStatusOptions = [];
    caseStatusValue = '';
    @api recordId;

    @wire(getObjectInfo, {
        objectApiName: CASE_OBJECT
    })
    caseObjectInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$caseObjectInfo.data.defaultRecordTypeId',
        fieldApiName: CASE_STATUS
    })
    casePicklistMethod({data, error}) {
        if(data) {
            // console.log('data=' + JSON.stringify(data));
            this.caseStatusOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [CASE_STATUS]
    })
    caseRecordOutput({data, error}) {
        if(data) {
            console.log('data here= ' + JSON.stringify(data));
            this.caseStatusValue = getFieldValue(data, CASE_STATUS);
            console.log('caseStatusValue= ' + this.caseStatusValue);
        }
        if(error) {
            console.error('ERROR= ' + error);
        }
    }
}