import { LightningElement } from 'lwc';

export default class LoopingDemo extends LightningElement {
    carList = ["Audi", "BMW", "Mercedes", "Porsche", "Ferrari"];

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Facebook",
            name: "Mark Zuckerburg"
        },
        {
            id: 3,
            company: "Apple",
            name: "Tim Cook"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeff Bezos"
        }
    ];
}