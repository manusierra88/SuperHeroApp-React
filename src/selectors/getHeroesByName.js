import {heroes} from '../data/Heroes';

export const getHeroesByName = (name='')=>{

    if(name.length === 0){
        return [];
    }
    name = name.toLocaleLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));    
}