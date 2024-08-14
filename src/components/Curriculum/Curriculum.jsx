import React from "react";
import './Curriculum.scss'
import { EducationsData, TrabajosData } from "../../data/data_es";
import { Education } from "./Education";
import { Trabajos } from "./Trabajos";

const Curriculum = () => {
    
    return (
        <section id="curriculum" className="curriculum">
            <div className="contenido-seccion">
                <h2>Curriculum</h2>
                <div className="fila">
                    <div className="col izquierda">
                        <h3>Educación</h3>
                        <Education educations={EducationsData} />
                    </div>

                    <div className="col derecha">
                        <h3>Experiencia de trabajo</h3>
                        <Trabajos educations={TrabajosData} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Curriculum;