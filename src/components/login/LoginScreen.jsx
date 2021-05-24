import React, { useEffect, useState } from 'react'
import './LoginScreen.scss';
import { RegisterForm1 } from './forms/RegisterForm1';
import { RegisterForm2 } from './forms/RegisterForm2';

export const LoginScreen = () => {
    
    const { pathname } = window.location;
    const paths = pathname.split('/')

    console.log(paths);

    const form = ( paths ) => {

        if (paths[paths.length-1] === 'login') {
            return <RegisterForm1 />
        } else if (paths[paths.length-1] === 'second') {
            return <RegisterForm2 />
        }
    }


    return (
        <div className="background">
            <div className="login-card">
                <div className="image-container">
                <img src={ '../logos/Logo.svg' } alt={ 'logo' } />
                </div>
                <p className="singup-message">Estás a un paso de tener tu cuenta TOC EDUCATION</p>
                {
                    form( paths )
                }
                <p className="alr-acc">¿Ya tiene una cuenta? <a href="#">Inicie sesión</a></p>
            </div>
        </div>
    )
}
