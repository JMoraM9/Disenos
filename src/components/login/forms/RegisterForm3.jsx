import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm_3.scss'

export const RegisterForm3 = () => {
    return (
        <> 
        <div className="steps">
            <span className="step-active"></span>
            <span className="step-active"></span>
            <span className="step-active step-3"></span>
        </div>

        <form>
            <div className="tel">
                <label htmlFor="tel">Teléfono<span>*</span></label>
                <div className="row">
                    <select name="id_type" id="id_type">
                        <option value="col">+57</option>
                    </select>
                    <input type="text" name="tel" id="tel" placeholder="Número de teléfono"/>
                </div>
            </div>

            <div className="avatar-container">
                    <div className="thumbnail">
                        <img src="../logos/avatar.svg" alt="" />
                    </div>
                    <div className="text">
                        <h4>Subir avatar o foto de perfil</h4>
                        <span>Opcional puede subir un avatar o foto de perfil. Archivos permitidos: JPG, PNG, GIF, máximo 1 mb.</span>
                    </div>
            </div>
            
            <Link to="/inicio" className="next-button">
            Siguiente
            </Link>

            <Link to="/inicio" className="skip">
            Omitir paso
            </Link>


        </form>
        </>
    )
}