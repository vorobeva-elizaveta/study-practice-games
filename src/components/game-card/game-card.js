import { AbstractDivComponent } from '../../core/div-component'
import { AbstractButtonComponent } from '../../core/button-component'
import './index.css'

export class GameCard extends AbstractDivComponent {
    constructor(gameData) {
        super()
        this.game = gameData
    }

    render() {
        this.el.innerHTML = `<div class="game-card">
            <div class="game-card__content">
                <h3>${this.game?.name}</h3>
                <p>${this.game?.description}</p>
            </div>
        </div>`
        this.el.append(this.createButton())
        return this.el
    }

    navigateToGame() {
        console.log(this.game)
        if (!this.game?.path) throw new Error('Не передан путь до игры')
        location.hash = this.game.path
    }

    createButton() {
        this.button = new AbstractButtonComponent('Перейти', {
            onClick: this.navigateToGame.bind(this),
        })
        return this.button.render()
    }
}
