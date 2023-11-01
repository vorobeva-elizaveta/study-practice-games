export class AbstractView {
    constructor() {
        this.app = document.querySelector('#root')
    }

    setTitle(title) {
        document.title = title
    }

    render() {
        return``
    }

    destroy() {
        this.app.innerHTML = ''
        return
    }
}
