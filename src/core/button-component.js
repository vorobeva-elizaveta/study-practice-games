export class AbstractButtonComponent {
    constructor(text, { onClick }) {
        this.el = document.createElement('button')
        this.el.onclick = onClick
        this.el.innerHTML = text
    }

    render() {
        return this.el
    }
}
