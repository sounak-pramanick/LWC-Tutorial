import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome'

export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;

    cards = [
        {id: 1, listClass: "card", type: "diamond", icon: "fa fa-diamond"},
        {id: 1, listClass: "card", type: "plane", icon: "fa fa-paper-plane-o"},
        {id: 1, listClass: "card", type: "anchor", icon: "fa fa-anchor"},
        {id: 1, listClass: "card", type: "bolt", icon: "fa fa-bolt"},
        {id: 1, listClass: "card", type: "cube", icon: "fa fa-cube"},
        {id: 1, listClass: "card", type: "anchor", icon: "fa fa-anchor"},
        {id: 1, listClass: "card", type: "leaf", icon: "fa fa-leaf"},
        {id: 1, listClass: "card", type: "bicycle", icon: "fa fa-leaf"},
        {id: 1, listClass: "card", type: "diamond", icon: "fa fa-diamond"},
        {id: 1, listClass: "card", type: "bomb", icon: "fa fa-bomb"},
        {id: 1, listClass: "card", type: "leaf", icon: "fa fa-leaf"},
        {id: 1, listClass: "card", type: "bomb", icon: "fa fa-bomb"},
        {id: 1, listClass: "card", type: "bolt", icon: "fa fa-bolt"},
        {id: 1, listClass: "card", type: "bicycle", icon: "fa fa-bicycle"},
        {id: 1, listClass: "card", type: "plane", icon: "fa fa-paper-plane-o"},
        {id: 1, listClass: "card", type: "cube", icon: "fa fa-cube"}
    ];

    renderedCallback() {
        if(this.isLibLoaded) return;
        loadStyle(this, fontawesome + '/fontawesome/css/font-awesome.min.css')
        .then(() => {
            console.log('CSS loaded successfully');
        })
        .catch(error => {
            console.error('THIS IS THE ERROR: ', error);
        })
        this.isLibLoaded = true;
    }

    displayCard(event) {
        let currCard = event.target;
        currCard.classList.add("open", "show", "disabled");
    }
}