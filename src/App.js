import React, { Fragment, useEffect, useState } from 'react';
//components
import SlidesHow from './components/SlidesHow';
import Pagination from './components/pagination';
import Diapositivas from './components/diapositivas';
//mocks
import { diapositivas } from './mocks/diapositivas.mock';
//css
import './assets/css/style.css';

//hecho por cristian david grondona jimenez
const App = () => {
    const [pagina, setPagina] = useState(1);
	//funciones
	const restart = () => setPagina(1);
	const prev = () => setPagina(pagina - 1);
	const next = () => setPagina(pagina + 1);
	useEffect(() => {
		setPagina(1);
	}, [])
	//todas las diapositivas
 	return (
		<Fragment>
			<SlidesHow/>
			<Pagination pagina={pagina}
				max={diapositivas.length}
				restart={restart}
				prev={prev}
				next={next}
			/>
			<Diapositivas diapositiva={diapositivas[pagina - 1]}/>
		</Fragment>
  	);
}

export default App;
