import React from 'react';
import { Movie } from './Movie';

function Movies(props) {

    return <div className="movies">
        {
        props.films.map((x) => <Movie key={x.imdbID} info={x}/>)
        }
    </div>;
}

export { Movies };