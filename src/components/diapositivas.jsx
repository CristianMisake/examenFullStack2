import React from 'react';

//Diapositivas hecho por cristian david grondona jimenez
const Diapositivas = ({diapositiva}) => {

    return (
        <div className="diapositiva">
            <div className="title">{diapositiva.title}</div>
            <div className="text">{diapositiva.text}</div>
        </div>
    );
}

export default Diapositivas;
