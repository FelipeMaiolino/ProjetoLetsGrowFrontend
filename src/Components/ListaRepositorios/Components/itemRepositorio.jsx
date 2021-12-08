import React from 'react';

const ItemRepositorio = ({repo}) =>(
  <a  
    href={repo.html_url}
    key={repo.id}
    className="containerItemRepositorio"
    target="_blank"
    >
      <span>{repo.name}</span>
      <span>Estrelas: {repo.stargazers_count}</span>
      <span>Forks: {repo.forks_count}</span>
      <span>Issues: {repo.open_issues}</span>
    </a>
);

export default ItemRepositorio;