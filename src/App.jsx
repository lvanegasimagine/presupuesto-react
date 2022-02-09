import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

import Pregunta from "./components/Pregunta";

function App() {
  //Definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  // useEffect que actualiza el restante

  useEffect(() => {

    // agrega el nuevo presupuesto
    if(crearGasto){
      guardarGastos([
        ...gastos,
        gasto
      ])
    }

    //resta el presupuesto actual

    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);

    guardarCrearGasto(false);
  
  }, [gasto]);
  


  return (
    <div className="container">
      <header className="">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            mostrarPregunta ? 
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto} />
                </div>
                <div className="one-half column">
                  <Listado gastos={gastos}/>
                  <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
