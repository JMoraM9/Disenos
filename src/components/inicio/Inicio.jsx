import React from 'react'
import { Navbar } from './navbar/Navbar'
import './Inicio.scss'
import { ExamCard } from './examenes/ExamCard'


 export const Inicio = ({ history }) => {

    const exams = [
        {
            area: 'Cefalea',
            id: 1,
            limit_date: '05/04/2021',
            intentos: '01/02',
        }, 
        {
            area: 'Nutrición Parenteral',
            id: 2,
            limit_date: '05/04/2021',
            intentos: '01/02',
        },
        {
            area: 'Hemoglobina',
            id: 3,
            limit_date: '05/04/2021',
            intentos: '01/02',
        }
    ]


    return (
        <>
            <Navbar />
            <div className="cards-container">
                <div className="main-info">
                    <div className="card saludo">
                        <div className="text">
                            <h3 className="name">Hola Andrés</h3>
                            <h4 className="id-title">Identificación</h4>
                            <span className="id-number">123456789</span>
                        </div>
                        <div className="image">
                            <img src="./logos/shield.svg" alt="" />
                        </div>
                    </div>
                    <div className="card facturacion">
                        <h3>Facturación</h3>
                        <div className="buttons-container">
                        <div className="btn">
                            <img src="./logos/Payments.svg" alt="pagos" />
                            Realizar Pago
                        </div>
                        <div className="btn">
                            <img src="./logos/bills.svg" alt="facturas" />
                            Descargar facturas
                        </div>
                        </div>
                    </div>
                </div>

                <h2>Examenes para presentar</h2>

                <div className="exams-card">
                    {
                        exams.map( exam => (
                            <ExamCard
                                history = { history }
                                key={ exam.id }
                                    { ...exam }
                            />
                        ))
                    }
                </div>
            </div>
            

        </>
    )
 }
 