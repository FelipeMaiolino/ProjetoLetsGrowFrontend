import React from 'react';
import '../style/formulario.css'

const FormularioBuscaPorOrg = ({org, error, buttonAction, changeOrg, e})=>(
  <form className="containerFormulario">
    <input
      type="text"
      className="input"
      value={org}
      placeholder="Organização"
      onChange={e=>changeOrg(e.target.value)}
      />
      <button className="botaoBusca" onClick={buttonAction}>
        Buscar
      </button>
      
  </form>
);

export default FormularioBuscaPorOrg;