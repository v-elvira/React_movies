import React from 'react';

function Movie(props) {
    const {Title: title, Type: type, Year: year, Poster: poster, imdbID: id} = props
    return <div className="card movie">
            <div className="card-image">
                <img className='card-image-img' src={poster !== 'N/A' ? poster : "https://placehold.co/100x140?text="+title} />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className='right'>{type}</span></p>
            </div>
        </div>;
}

export { Movie };