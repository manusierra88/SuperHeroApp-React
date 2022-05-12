import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse(location.search) //*usando el queryString obtenemos el query que venga del hook location 



  const [formValue, handleInputChange] = useForm({
    searchInput: q,
  });
  const { searchInput } = formValue;
  const heroeFiltrado = useMemo( ()=> getHeroesByName(q),[q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchInput}`);
  }
  return (
    <div className='row mt-4'>
      <h5> Búsqueda </h5>
      <div className='col-5'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Ingrese el nombre del heroe'
            autoComplete='off'
            name='searchInput'
            className='form-control'
            value={searchInput}
            onChange={handleInputChange}
          />
          <button type='submit' className='btn btn-outline-primary mt-3'>Buscar</button>
        </form>

      </div>
      <div className='col-7'>
        <h3>Resultados de la búsqueda</h3>
        <hr />
        { (q=== '')
            ? <div className='alert alert-info'>Buscar un Heroe</div>
            : (heroeFiltrado.length === 0) 
              && <div className=' alert alert-danger'>No hay resultados de la bùsqueda para: {q} </div>
        
        }
        {heroeFiltrado.map(heroe =>
          (<HeroCard key={heroe.id} {...heroe} />)
        )}
      </div>
    </div>
  )
}
