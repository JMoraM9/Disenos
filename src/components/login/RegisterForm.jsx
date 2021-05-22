import React from 'react'

export const RegisterForm = () => {
    return (
        <form>
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" id="email" placeholder="Ingrese su correo"/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="paswword" placeholder="Ingrese su contraseña"/>
            <label htmlFor="confpass">Confirme su contraseña</label>
            <input type="password" name="confpass" id="confpass" placeholder="Confirme su contraseña"/>
            <div className="terms">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Confirmo que acepto los <a href="#">Términos y Condiciones</a></label>
            </div>
            
            <button className="next-button">Siguiente</button>
            <p className="alr-acc">¿Ya tiene una cuenta? <a href="#">Inicie sesión</a></p>
        </form>
    )
}
