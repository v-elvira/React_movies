import React from 'react';

function Movie(props) {
    const {Title, Type, Year, Poster} = props.info
    return <div className="movie card">
        <img src={Poster !== 'N/A' ? Poster : "https://placehold.co/100x140?text="+Title} className='card-img'/>
        <span className="card-title">{Title}</span>
        <p>{Type}
        <br/>
        {Year}</p>
    </div>;
}

export { Movie };