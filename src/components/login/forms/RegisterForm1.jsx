import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterForm1 = () => {
    return (
        <> 
        <div className="steps">
            <span className="step-active"></span>
            <span className="step-inactive"></span>
            <span className="step-inactive step-3"></span>
        </div>
        <form>
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" id="email" placeholder="Ingrese su correo"/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="paswword" placeholder="Ingrese su contraseña"/>
            <label htmlFor="confpass">Confirme su contraseña</label>
            <input type="password" name="confpass" id="confpass" placeholder="Confirme su contraseña"/>
            <div className="terms">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Confirmo que acepto los <a href="/#">Términos y Condiciones</a></label>
            </div>
            
            
            <Link to="/login/second" className="next-button">
            Siguiente
            </Link>
        </form>
        </>
    )
}
