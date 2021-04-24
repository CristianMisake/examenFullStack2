import React from 'react';

//Pagination hecho por cristian david grondona jimenez
const Pagination = ({pagina, max, restart, prev, next}) => {

    return (
        <div className="pagination">
            <button type="button" className="btn" onClick={restart} disabled={pagina === 1}>Restart</button>
            <button type="button" className="btn" onClick={prev} disabled={pagina === 1}>Prev</button>
            <button type="button" className="btn" onClick={next} disabled={pagina === max}>Next</button>
        </div>
    );
}

export default Pagination;
