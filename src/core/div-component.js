export class AbstractDivComponent {
    constructor() {
        this.el = document.createElement('div')
    }

    render() {
        return this.el
    }
}
