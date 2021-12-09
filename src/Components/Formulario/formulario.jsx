import React from 'react';
import Loading from '../Loading/loading';
import './formulario.css'


const Formulario = ({user, loading, error, buttonAction, changeUser, e})=>(
  <form className="containerFormulario">
    <input
      type="text"
      className="input"
      value={user}
      placeholder="Usuario"
      onChange={e=>changeUser(e.target.value)}
      />
      <button className="botaoBusca" onClick={buttonAction}>
        {loading ? <Loading/> : "Buscar"}
      </button>

      <p className="erro">{error}</p>
  </form>
);

export default Formulario;