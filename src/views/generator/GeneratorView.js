import { AbstractView } from '../../core/view.js'
import './generator-view.css'

export class GeneratorView extends AbstractView {
    constructor() {
        super()
        this.setTitle('Games - Generator')
    }

    render() {
        this.createOutputBox()
        this.createGenerateButton()
        this.page = document.createElement('div')
        this.page.className = 'generator-page base-game-view'
        this.page.append(this.generatorOutput)
        this.page.append(this.button)
        this.app.append(this.page)
    }

    destroy() {
        this.app.innerHTML = ''
        return
    }

    rerender() {
        this.destroy()
        this.render()
    }

    createOutputBox() {
        this.generatorOutput = document.createElement('div')
        this.generatorOutput.className = 'generator-page__generator-output-box'
        this.generatorOutput.innerHTML = this.randomNumber || 0
    }

    createGenerateButton() {
        this.button = document.createElement('button')
        this.button.innerHTML = 'Generate'
        this.button.onclick = () => {
            this.getRandomNumber()
            this.rerender()
        }
    }

    getRandomNumber(min = 0, max = 100) {
        this.randomNumber = Math.floor(Math.random() * (max - min) + min)
    }
}
