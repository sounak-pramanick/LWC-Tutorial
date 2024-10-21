import { LightningElement } from 'lwc';
import CHATTER_IMG from '@salesforce/resourceUrl/chatter_image';
import USER_WALKING_IMG from '@salesforce/resourceUrl/user_walking';

export default class StaticImages extends LightningElement {
    // upload the images as static resource by navigating to setup -> static resource
    chatterImage = CHATTER_IMG;
    userWalking = USER_WALKING_IMG;
}