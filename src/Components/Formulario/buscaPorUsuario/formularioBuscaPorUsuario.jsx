import React from 'react';
import '../style/formulario.css'


const FormularioBuscaPorUsuario = ({user, error, buttonAction, changeUser, e})=>(
  <form className="containerFormulario">
    <p className="erro">{error}</p>
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
      
  </form>
);

export default FormularioBuscaPorUsuario;