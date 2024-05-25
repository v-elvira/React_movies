import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        stype: "",
    };

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.props.fsearch(this.state.search, this.state.stype);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ stype: event.target.dataset.stype }),
            () => this.props.fsearch(this.state.search, this.state.stype)
        );
    };

    render() {
        return (
            <div className="input-field">
                <input
                    placeholder="Search"
                    type="search"
                    className="validate"
                    value={this.state.search}
                    onChange={(event) => {
                        this.setState({ search: event.target.value });
                    }}
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    className="purple btn search-btn"
                    onClick={() => {
                        this.props.fsearch(this.state.search, this.state.stype);
                    }}
                >
                    Search
                </button>
                <div className="stype-div">
                    <label>
                        <input
                            className="with-gap stype"
                            name="stype"
                            type="radio"
                            data-stype=""
                            onChange={this.handleFilter}
                            checked={this.state.stype===''}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap stype"
                            name="stype"
                            type="radio"
                            data-stype="movie"
                            onChange={this.handleFilter}
                            checked={this.state.stype==='movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input
                            className="with-gap stype"
                            name="stype"
                            type="radio"
                            data-stype="series"
                            onChange={this.handleFilter}
                            checked={this.state.stype==='series'}
                        />
                        <span>Series</span>
                    </label>
                    <label>
                        <input
                            className="with-gap stype"
                            name="stype"
                            type="radio"
                            data-stype="episode"
                            onChange={this.handleFilter}
                            checked={this.state.stype==='episode'}
                        />
                        <span>Episode</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
