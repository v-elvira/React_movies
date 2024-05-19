import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {this.props.fsearch(this.state.search)}
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
        onClick={() => {this.props.fsearch(this.state.search)}}
        >
            Search
        </button>
      </div>;
    }
}

export {Search}
