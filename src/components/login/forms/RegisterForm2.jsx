import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm_2.scss'

export const RegisterForm2 = () => {
    return (
        <>
        <div className="steps">
                    <span className="step-active"></span>
                    <span className="step-active"></span>
                    <span className="step-inactive step-3"></span>
                </div>
        <form>
            <label htmlFor="name">Nombre<span>*</span></label>
            <input type="text" id="name" name="name" placeholder="Ingrese su nombre"/>
            <label htmlFor="lastname">Apellido<span>*</span></label>
            <input type="text" name="lastname" id="lastname" placeholder="Ingrese su apellido"/>
            <div className="id">
                <label htmlFor="id">Documento<span>*</span></label>
                <div className="row">
                    <select name="id_type" id="id_type">
                        <option value="cc">CC</option>
                        <option value="ti">TI</option>
                    </select>
                    <input type="number" name="id" id="id" placeholder="Número de documento"/>
                </div>
            </div>
            <Link to="/login/third" className="next-button">
            Siguiente
            </Link>
            <a href="/#" className="skip">Omitir paso</a>
        </form>
        </>
    )
}
