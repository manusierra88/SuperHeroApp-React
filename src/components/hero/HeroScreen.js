import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroesById';



export const HeroScreen = () => {
  const { id } = useParams();//* es un hook que toma lo que venga de params en la URL
  const heroe = useMemo(()=>{//* usamos useMemo para que memorice la funcion y su contenido haciendo que sea mas eficiente con los datos
    return getHeroeById(id);
  },[id]);
  const navigate = useNavigate();
  const handleReturn = () => {

    navigate(-1); //*ese -1 significa que cuando presione el boton regresar va a volver a la pagina de la cual vino el usuario  
  }

  if (!heroe) {
    return <Navigate to={'/'} />
  } //* Si el id del heroe no existe usamos el Navigate que es un componente de router que nos permite redireccionar a donde querramos
  const imgPath = `/assets/${heroe.id}.jpg`;
  return (
    <div className='row mt-5'>
      <div className=' col-4'>
        <img src={imgPath} alt={heroe.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' ></img>
      </div>
      <div className='col-6'>
        <h4> Superheroe: {heroe.superhero}</h4>
        <p> Alter Ego: {heroe.alter_ego}</p>
        <p>Publicador: <span className='text-muted'> {heroe.publisher} </span> </p>
        <p className='mb-4'>Primera aparición: <span className='text-muted'> {heroe.first_appearance}</span></p>
        <button
          onClick={handleReturn}
          className='btn btn-info'>
          Return
        </button>



      </div>
    </div>
  )
}
