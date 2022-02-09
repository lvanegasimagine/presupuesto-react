import React from 'react';
import ListarGasto from './ListarGasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                gastos.map(gasto => (
                    <ListarGasto key={gasto.id} gasto={gasto}/>
                ))
            }
        </div>
     );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado;