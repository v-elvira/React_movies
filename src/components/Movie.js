import React from 'react';

function Movie(props) {
    const {Title, Type, Year, Poster} = props.info
    return <div className="movie card">
    <span className="card-title">{Title}</span>
        <img src={Poster} className='card-img'/>
        <p>{Type}
        <br/>
        {Year}</p>
    </div>;
}

export { Movie };