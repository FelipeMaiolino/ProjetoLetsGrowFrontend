import React from 'react';
import './formulario.css'


const FormularioBuscaPorNome = ({user, loading, error, buttonAction, changeUser, e})=>(
  <form className="containerFormulario">
    <input
      type="text"
      className="input"
      value={user}
      placeholder="Usuario"
      onChange={e=>changeUser(e.target.value)}
      />
      <button className="botaoBusca" onClick={buttonAction}>
        Buscar
      </button>
      <p className="erro">{error}</p>
  </form>
);

export default FormularioBuscaPorNome;