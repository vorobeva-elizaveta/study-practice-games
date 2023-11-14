import { MainView } from './views/main/MainView'
import { GeneratorView } from './views/generator/GeneratorView'
import './main.css'
class App {
    constructor() {
        this.routes = [
            {
                path: '',
                view: MainView,
            },
            { path: '#generator', view: GeneratorView },
        ]

        window.addEventListener('hashchange', this.route.bind(this))
        this.route()
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy()
        }
        const route = this.routes.find((r) => r.path == location.hash)
        if (!route) {
            this.currentView = new NotFoundPage()
            this.currentView.render()
            return
        }
        this.currentView = new route.view()
        this.currentView.render()
    }
}

new App()
