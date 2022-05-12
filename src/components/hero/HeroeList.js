import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {
    
    const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher]) 

    return (
        <div className='container animate__animated animate__fadeIn'>
            <div className='row row-col-3' >

                {heroes.map(hero =>
                    (<HeroCard key={hero.id} {...hero} />) //pasamos la referencia a lo que contenga el heroe con el operador spread ...
                )}

            </div>
        </div>
    )
}
