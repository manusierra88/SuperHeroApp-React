import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from '../routers/DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
        
        {/* <Route path='/login' element={<LoginScreen />} /> */}
       <Route path='/login' element={
         <PublicRoute>
           <LoginScreen/>
         </PublicRoute>
       }>

       </Route>
       
        <Route path='/*' element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }>

        </Route>
      
      </Routes>
    </BrowserRouter>


  )
}


//*si queremos deifinir rutas privadas debemos usar el PrivateRoute, que es un componente que envuelve donde estén las rutas que 
//*necesitemos hacer privadas de la app, el PrivateRoute es un componente que debe renderizar de forma condicional el acceso o no
//* al resto de rutas dependiendo en este caso que nuestro usuario este autenticado o no.