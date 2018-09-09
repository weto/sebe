import React, {Component} from 'react';
import BoxPesquisaInstituicao from './componentes/BoxPesquisaInstituicao';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/estilo.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="containerGeral" id="containerGeral">
          <Route exact path="/" component={BoxPesquisaInstituicao} />
        </div>
      </Router>
    );
  }
}

export default App;