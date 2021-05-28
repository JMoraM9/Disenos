import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './ExamIndic.scss';

export const ExamIndic = ({ history }) => {

    const handleStart = () => {
        history.push('/test-questions')
    }

    const handleCancel = () => {
        history.goBack();
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="image">
                    <img src="./logos/examen_screen.svg" alt="exam"/>
                </div>
                <div className="text">
                    <h2>EVALÚA TUS CONOCIMINETOS!, Y DEMUESTRA TODO LO QUE SABES</h2>
                    <h3>Examen de Cefalea</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium consequatur magni maxime voluptatibus dicta ab impedit dolorem iure sed quasi. Illum atque tenetur consequatur quidem consequuntur ea. Blanditiis, voluptatem obcaecati?</p>
                    <div className="button-container">
                        <button className="btn btn-1" onClick={ handleStart }>Empezar</button>
                        <button className="btn btn-2" onClick={ handleCancel }>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
