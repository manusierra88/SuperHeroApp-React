import { heroes } from "../data/Heroes"



export const getHeroesByPublisher = (publisher)=>{
    const validPublisher = ['Marvel Comics', 'DC Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher}, no es un publicador valido de comics`);
    };

    return heroes.filter(heroe => heroe.publisher === publisher);
};