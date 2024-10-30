import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ['John', 'Jane', 'Mike', 'Smith', 'Nik'];

    fetchDetailHandler() {
        const elem = this.template.querySelector('h1');
        elem.style.border = '1px solid black';
        console.log(elem.innerText);

        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute('title', `Hello, ${item.innerText}`);
        })

        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>I am a child element</p>'
    }
}