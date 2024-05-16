import React from "react"
import { Movies } from "../components/Movies"

class Main extends React.Component {
    constructor() {
        super()
        this.state = {loaded: false, movies: [], error: false}

        fetch('https://www.omdbapi.com/?apikey=f8b224e7&s=matrix&page=2').then((x) => x.json()).then((x) => {
            // console.log(x.Search.length)
            this.setState({loaded: true, movies: x.Search})}).catch((err) => this.setState({error: err}))
    }
    render() {
        let text = ''
        if (!this.state.loaded) {
            if (!this.state.error) text = 'Loading...'
            else text = 'Fetching error.'
        }
        else {
            text = <Movies films={this.state.movies} />
        }
        return <main className="container content">
            Hello from Movies App
            <br/>
            {text}
        </main>
    }
}

export {Main}