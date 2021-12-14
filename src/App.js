import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import Cabecalho from './Components/Cabecalho';
import FormularioBuscaPorNome from './Components/Formulario';
import FormularioBuscaPorLinguagem from './Components/Formulario/formularioBuscaPorLinguagem';
import ListaRepositorio from './Components/ListaRepositorios';


class App extends Component {
  state = {
    user: "",
    language: "",
    repos: [],
    error: "",
  };

  changeUser = user =>{
    this.setState({user});
  }

  changeLanguage = language =>{
    this.setState({language});
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
        language: ""});
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
          language: ""
        });
      }).catch(error => {
        this.setState({
          error: "usuario não encontrado",
          repos: [],
      }); 
    }
  )}


  render() {
    const{user, language, repos, error, errorL} = this.state;

    return (
      <div className="App">
        <Cabecalho/>
        <FormularioBuscaPorNome
          changeUser={this.changeUser}
          user={user}
          error={error}
          buttonAction={this.searchUser}
        />
        <FormularioBuscaPorLinguagem
          changeLanguage={this.changeLanguage}
          language={language}
          error={errorL}
          buttonAction={this.searchLanguage}
        />
        <ListaRepositorio repos={repos}/>
      </div>
    );
  }
}

export default App;
