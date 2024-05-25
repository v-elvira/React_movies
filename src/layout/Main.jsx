import React from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

class Main extends React.Component {
    state = {
        movies: [],
        loaded: false
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=f8b224e7&s=matrix&page=1').then((response) => response.json()).then((data) => {
            // console.log(x.Search.length)
            this.setState({loaded: true, movies: data.Search})}).catch((err) => this.setState({error: err}))
    }

    fsearch = (text, stype) => {
        this.setState({movies: [], loaded: false});
        fetch(`https://www.omdbapi.com/?apikey=f8b224e7&s=${text}${stype !== '' ? `&type=${stype}`: ''}`).then((response) => response.json()).then((data) => {
            this.setState({loaded: true, movies: data.Search || []})}).catch((err) => this.setState({error: err}))
    }

    render() {
        const {movies, loaded} = this.state
        return <main className="container content">
            <Search fsearch={this.fsearch}/>
            {   
                loaded ? <Movies movies={movies}/>: 
                (!this.state.error) ? <><Preloader/> <h5>Loading...</h5></>: <h5>Fetching error.</h5>
            }
        </main>
    }
}

export {Main}
