import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        stype: ''
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {this.props.fsearch(this.state.search)}
    }

    handleChange = (event) => {
        this.setState({stype: event.target.value})
    }

    render() {
        return <div className="input-field">
          <input placeholder="Search" 
                type="search" 
                className="validate"
                value={this.state.search}
                onChange={(event) => {this.setState({search: event.target.value})}}
                onKeyDown={this.handleKeyDown}
           />
        <button
        className="purple btn search-btn"
        onClick={() => {this.props.fsearch(this.state.search, this.state.stype)}}
        >
            Search
        </button>
        <div className="stype-div" >
            <label>
            <input className="with-gap stype" name="stype" type="radio" value="" onChange={this.handleChange} />
            <span>All</span>
            </label>
            <label>
            <input className="with-gap stype" name="stype" type="radio" value="movie" onChange = {this.handleChange}/>
            <span>Movie</span>
            </label>
            <label>
            <input className="with-gap stype" name="stype" type="radio" value="series" onChange={this.handleChange}/>
            <span>Series</span>
            </label>
            <label>
            <input className="with-gap stype" name="stype" type="radio" value="episode" onChange={this.handleChange}/>
            <span>Episode</span>
            </label>
        </div>
      </div>;
    }
}

export {Search}
