import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'


export const PrivateRoute = ({children}) => {
    const { user }=  useContext(AuthContext);

  return user.logged 
                ? children
                : <Navigate to='/login' />
}


//*el children seria lo que en la implementacion de la PrivateRoute contenga, en este caso contiene el DashboardRoutes

//*si el usuario no tiene el logged en true entonces el navigate lo va a sacar nuevamente a la pantalla de login y no puede
//* acceder por mas que el usuario coloque manualmente la ruta de la aplicacion 