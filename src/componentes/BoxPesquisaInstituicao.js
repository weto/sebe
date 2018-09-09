import React, { Component } from 'react';
import TabelaInstituicao from './TabelaInstituicao';

class BoxPesquisaInstituicao extends Component {

  render() {
    return (
    	<div className="pesquisa-page">
          <div>
            <div className="cabecalho"><h2>Enade</h2></div>
            <TabelaInstituicao />
		      </div>
      </div>
    );
  }
}

export default BoxPesquisaInstituicao;
