import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { useNavigate } from 'react-router-dom'

import { types } from '../../types/types';

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
   const navigate = useNavigate()
    //*useNavigate es un hook de react-router que nos permite navegar y en este caso evitar que podamos volver a la pagina de lognin
    const handleLogin = ()=>{
        // navigate('/',
        // {replace:true})
        const action = {
            type : types.login,
            payload: {name: 'Manuel'}
        }

        dispatch(action);

        navigate('/',{replace: true});

    }
    return (
        <div className='container'>
            <h1>Login</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={handleLogin}
             >
                Login
            </button>
        </div>
    )
}
