import React from 'react'

export const Education = ({ educations = [] }) => {
    return (
        <>
            {
                educations.map(ed => (
                    <div className="item izq" key={ed.id}>
                        <h4>{ed.title}</h4>
                        <span className="casa">{ed.casa}</span>
                        <span className="fecha">{ed.fecha}</span>
                        {
                            ed.descripcion ? <p>{ed.descripcion}</p> : null
                        }
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
