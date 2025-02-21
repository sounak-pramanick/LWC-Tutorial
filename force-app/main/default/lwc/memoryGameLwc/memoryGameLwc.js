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

    openedCards = [];
    matchedCards = [];
    moves = 0;
    totalTime = "00:00";
    timerRef;

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
        this.openedCards.concat(currCard);
        if(this.openedCards.length === 2) {
            this.moves++;
            if(this.openedCards[0].type === this.openedCards[1].type) {
                this.matchedCards.concat(this.openedCards[0], this.openedCards[1]);
                this.matched();
            }
            else {
                this.unmatched();
            }
        }
    }

    matched() {
        this.openedCards[0].classList.add("match", "disabled");
        this.openedCards[1].classList.add("match", "disabled");
        this.openedCards[0].classList.remove("show", "open");
        this.openedCards[1].classList.remove("show", "open");
        this.openedCards = [];
        if(this.matchedCards.length === 16) {
            window.clearInterval(this.timerRef);
        }
    }

    unmatched() {
        this.openedCards[0].classList.add("unmatched");
        this.openedCards[1].classList.add("unmatched");
        this.action('DISABLE');
        setTimeout(() => {
            this.openedCards[0].classList.remove("show", "open", "unmatched");
            this.openedCards[1].classList.remove("show", "open", "unmatched");
            this.action('ENABLE');
            this.openedCards = [];
        }, 1200);
    }

    action(action) {
        let cards = this.template.querySelectorAll('.card');
        Array.from(cards).forEach(item => {
            if(action === 'ENABLE') {
                let isMatch = item.classList.contains('match');
                if(!isMatch) {
                    item.classList.remove("disabled");
                }
            }
            else if(action === 'DISABLE') {
                item.classList.add("diabled");
            }
        });
    }

    timer() {
        let startTime = new Date();
        this.timerRef = setInterval(() => {
            let diff = new Date().getTime() - startTime.getTime();
            let d = Math.floor(diff / 1000);
            let m = Math.floor(d % 3600 / 60);
            let s = Math.floor(d % 3600 % 60);
            let mDisplay = m > 0? m + (m === 1? "minute, " : "minutes, ") : "";
            let sDisplay = s > 0? s + (s === 1? "second" : "seconds") : "";
            this.totalTime = mDisplay + sDisplay;
        }, 1000);
    }

    shuffle() {
        this.openedCards = [];
        this.matchedCards = [];
        this.moves = 0;
        this.totalTime = "00:00";
        window.clearInterval(this.timerRef);
        let cardElems = this.template.querySelectorAll('.card');
        Array.from(cardElems).forEach(item => {
            item.classList.remove("show", "open", "match", "disabled");
        })
        let array = [...this.cards];
        let counter = array.length;
        while(counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        this.cards = [...array];
    }
}