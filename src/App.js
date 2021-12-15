import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import Cabecalho from './Components/Cabecalho';
import FormularioBuscaPorUsuario from './Components/Formulario/buscaPorUsuario';
import FormularioBuscaPorLinguagem from './Components/Formulario/buscaPorLinguagem/formularioBuscaPorLinguagem';
import FormularioBuscaPorOrg from './Components/Formulario/buscaPorOrg';
import ListaRepositorio from './Components/ListaRepositorios';


class App extends Component {
  state = {
    user: "",
    language: "",
    org: "",
    repos: [],
    error: "",
  };

  changeUser = user =>{
    this.setState({user});
  }

  changeLanguage = language =>{
    this.setState({language});
  }

  changeOrg = org =>{
    this.setState({org});
  }

  searchUser = async (event) =>{  
    const {user} = this.state;
    event.preventDefault();
    try{
      const{data: repos} = await axios.get(`https://api.github.com/users/${user}/repos`);
      console.log(repos);
      this.setState({
        repos, 
        error: "", 
        user: "",
        language: "",
        org: ""
      });
    }catch{
      this.setState({
        error: "usuario não encontrado",
        repos: [],
      });
    }
  }

  searchLanguage = async (event) =>{ 
    const {language} = this.state;
    event.preventDefault();
    axios.get(`https://api.github.com/search/repositories?q=language%3A${language}`)
      .then(response => {
        this.setState({
          repos: response.data.items,
          user: "",
          language: "",
          org: ""
        });
      }).catch(error => {
        this.setState({
          error: "linquagem não encontrado",
          repos: [],
      }); 
    }
  )}

  searchOrg = async (event) =>{ 
    const {org} = this.state;
    event.preventDefault();
    console.log(org);
    axios.get(`Access-Control-Allow-Origin: https://github.com/search?q=org%3A${org}`)
      .then(response => {
        this.setState({
          repos: response.data.items,
          user: "",
          language: "",
          org: ""
        });
      }).catch(error => {
        this.setState({
          error: "org não encontrado",
          repos: [],
      }); 
    }
  )}


  render() {
    const{user, language, org, repos, error} = this.state;

    return (
      <div className="App">
        <Cabecalho/>
        <FormularioBuscaPorUsuario
          changeUser={this.changeUser}
          user={user}
          error={error}
          buttonAction={this.searchUser}
        />
        <FormularioBuscaPorLinguagem
          changeLanguage={this.changeLanguage}
          language={language}
          error={error}
          buttonAction={this.searchLanguage}
        />
        {/*Buscar por por org não esta funcionando ERRO: Access to XMLHttpRequest at 'access-control-allow-origin: https://github.com/search?q=org%3A' from origin 'http://localhost:3000' has been blocked by CORS policy*/}
        <FormularioBuscaPorOrg
          changeOrg={this.changeOrg}
          org={org}
          error={error}
          buttonAction={this.searchOrg}
        /> 
        <ListaRepositorio repos={repos}/>
      </div>
    );
  }
}

export default App;
