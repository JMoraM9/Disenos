import React from 'react'
import { Navbar } from '../navbar/Navbar'
import './ExamScreen.scss'

export const ExamScreen = () => {
    return (
        <>
            <Navbar />
            <div className="test-container">
                <h2>Examen de Cefalea</h2>
                <div className="avance">
                    <span className="progreso">Pregunta <span className="actual">1</span> de <span className="total">15</span></span>
                    <div className="timer">
                        <img src="./logos/clock.svg" alt="tiempo" />    
                        <span>10:51</span>
                    </div>
                </div>
                <div className="test">
                    <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cumque veniam sit esse obcaecati? Pariatur, nostrum expedita? A eum possimus in eligendi blanditiis</p>
                    <h3 className="question">¿Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
                    <ul className="answers">
                        <li className="option">
                            <input type="radio" name="opt" id="opt1" className="opt opt-A"/>
                            <label htmlFor="opt1">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</label>
                        </li>
                        <li className="option">
                            <input type="radio" name="opt" id="opt2" className="opt opt-B"/>
                            <label htmlFor="opt2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</label>
                        </li>
                        <li className="option">
                            <input type="radio" name="opt" id="opt3" className="opt opt-C"/>
                            <label htmlFor="opt3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</label>
                        </li>
                        <li className="option">
                            <input type="radio" name="opt" id="opt4" className="opt opt-D"/>
                            <label htmlFor="opt4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</label>
                        </li>
                    </ul>
                    <button className="btn">Responder</button>
                </div>
            </div>
        </>
    )
}
