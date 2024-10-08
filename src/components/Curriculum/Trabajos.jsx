import React from 'react'

export const Trabajos = ({ educations = [] }) => {
    return (
        <>
            {
                educations.map(ed => (
                    <div className="item der" key={ed.id}>
                        <h4>{ed.title}</h4>
                        <span className="casa">{ed.casa}</span>
                        <span className="fecha">{ed.fecha}</span>
                        {
                            ed.descripcion ? <p>{ed.descripcion}</p> : null
                        }
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
