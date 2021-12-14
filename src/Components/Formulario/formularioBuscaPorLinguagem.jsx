import React from 'react';
import Loading from '../Loading/loading';
import './formulario.css'


const FormularioBuscaPorLinguagem = ({language, loading, error, buttonAction, changeLanguage, e})=>(
  <form className="containerFormulario">
    <input
      type="text"
      className="input"
      value={language}
      placeholder="Linguagem"
      onChange={e=>changeLanguage(e.target.value)}
      />
      <button className="botaoBusca" onClick={buttonAction}>
        {loading ? <Loading/> : "Buscar"}
      </button>

      <p className="erro">{error}</p>
  </form>
);

export default FormularioBuscaPorLinguagem;