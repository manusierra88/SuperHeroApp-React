import React from 'react'
import { Link } from 'react-router-dom';



export const HeroCard = (
    { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }

) => {
    const imgPath = `/assets/${id}.jpg`;
    return (

        <div className='col-3 col-md-3 mb-2 card-container'>
            <div className='card'>
                <img src={imgPath} alt={superhero} className='img-fluid'></img>
            </div>
            <div className='card'>
                <h5 className='ms-1 card-title'> {superhero}</h5>
                <p className='ms-1 card-text'> {alter_ego}</p>
                <p className='ms-1 text-muted'> {publisher}</p>
                <br />
                <Link to={`/hero/${id}`} className='ms-1 mb-1' >More...</Link>

            </div>
        </div>

    )
}
