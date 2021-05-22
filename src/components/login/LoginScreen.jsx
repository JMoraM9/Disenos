import React from 'react'
import './LoginScreen.scss';
import { RegisterForm } from './RegisterForm';

export const LoginScreen = () => {
    return (
        <div className="background">
            <div className="login-card">
                <div className="image-container">
                <img src={ './Logo.svg' } alt={ 'logo' } />
                </div>
                <p className="singup-message">Estás a un paso de tener tu cuenta TOC EDUCATION</p>
                <div className="steps">
                    <span className="step-active"></span>
                    <span className="step-inactive"></span>
                    <span className="step-inactive step-3"></span>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}
