import React from 'react';
import './itemRepositorio.css';



const ItemRepositorio = ({repo}) =>(
  <div  
    key={repo.id}
    className="containerItemRepositorio"
    >
      <span>Nome do Usuario: {repo.owner.login}</span>
      <span>Nome do Repositorio: {repo.name}</span>
      <span>Estrelas: {repo.stargazers_count}</span>
      <span>Forks: {repo.forks_count}</span>
      <span>Issues: {repo.open_issues}</span>
      <span>Linguagem: {repo.language}</span>
      <a href={repo.html_url}><span>Link</span></a>
    </div>
);

export default ItemRepositorio;