import { AbstractView } from '../../core/view.js'
import { GameCard } from '../../components/game-card/game-card.js'
import games from '../../../static/games.js'
import './main-view.css'

export class MainView extends AbstractView {
    constructor() {
        super()
        this.setTitle('Games - Main Page')
        this.games = games
    }

    setTitle(title) {
        document.title = title
    }

    render() {
        if (this.mainElement) {
            this.destroy()
        }
        this.mainElement = document.createElement('div')
        this.mainElement.className = 'main-page'
        this.gamesElement = document.createElement('div')
        this.gamesElement.classList.add('main-page__games-list')
        this.gamesElement.append(...this.generateGamesCards())
        this.mainElement.append(this.gamesElement)
        this.app?.append(this.mainElement)
    }

    generateGamesCards() {
        return this.games.map((game) => new GameCard(game).render())
    }

    destroy() {
        this.app.innerHTML = ''
        return
    }
}
