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
    loading: false,
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
      this.setState({repos, error: "", loading: false});
    }catch{
      this.setState({
        error: "usuario não encontrado",
        repos: [],
        loading: false
      });
    }
  }

  searchLanguage = async (event) =>{  
    const {language} = this.state;
    event.preventDefault();

    try{
      
      axios.get(`https://api.github.com/search/repositories?q=language%3A${language}`)
      .then(response => {
        this.setState({
          repos: response.data.items,
        });
      })
    }catch{
      this.setState({
        error: "Linguagem não encontrada",
        repos: [],
      });
    }
  }


  render() {
    const{user, language, repos, error, loading} = this.state;

    return (
      <div className="App">
        <Cabecalho/>
        <FormularioBuscaPorNome
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
        <FormularioBuscaPorLinguagem
          changeLanguage={this.changeLanguage}
          language={language}
          error={error}
          loading={loading}
          buttonAction={this.searchLanguage}
        />
        <ListaRepositorio repos={repos}/>
      </div>
    );
  }
}

export default App;
