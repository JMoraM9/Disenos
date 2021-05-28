import React from 'react';
import './ExamCard.scss';

export const ExamCard = ({
    area,
    id,
    limit_date,
    intentos, 
    history
}) => {

    const handleClick = () => {
        history.push('/test')
    }


    return (
        <div className="exam_card">
            <div className="card-section area">
                <img src="./logos/examen.svg" alt="examen" />
                <h3>{ area }</h3>
            </div>
            <div className="card-section date">
                <span className="main-text">Fecha límite: <span className="text">{ limit_date }</span></span>
            </div>
            <div className="card-section tries">
                <span className="main-text">Intentos: <span className="text">{ intentos }</span></span>
            </div>
            <div  className="card-section ">
                <button className="btn" onClick={ handleClick }>Presentar</button>
            </div>
        </div>
    )
}
