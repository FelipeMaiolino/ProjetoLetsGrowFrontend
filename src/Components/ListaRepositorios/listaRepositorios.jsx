import React from 'react';
import ItemRepositorio from './Components';

const ListaRepositorio = ({repos}) =>(
  <div className="containerListaRepositorio">
    {
      repos.map(repo=>(
        <ItemRepositorio repo={repo}/>
      ))
    }
  </div>
)

export default ListaRepositorio;