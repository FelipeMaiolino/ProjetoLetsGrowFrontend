import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import Cabecalho from './Components/Cabecalho';
import Formulario from './Components/Formulario';
import ListaRepositorio from './Components/ListaRepositorios';
import BarraDePesquisa from './Components/BarraDePesquisa';

class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
  };

  changeUser = user =>{
    this.setState({user});
  }

  searchUser = async (event) =>{  
    const {user} = this.state;
    this.setState({loading: true});
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


  render() {
    const{user, repos, error, loading} = this.state;

    return (
      <div className="App">
        <Cabecalho/>
        <Formulario
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
        <BarraDePesquisa/>
        <ListaRepositorio repos={repos}/>
      </div>
    );
  }
}

export default App;
