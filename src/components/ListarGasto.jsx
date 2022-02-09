import React from "react";
import PropTypes from 'prop-types';

const ListarGasto = ({ gasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre}
      <span className="gasto">{gasto.cantidad}</span>
    </p>
  </li>
);

ListarGasto.propTypes = {
  gasto: PropTypes.object.isRequired
}


export default ListarGasto;
