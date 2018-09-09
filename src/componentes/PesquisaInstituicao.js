import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onSearchList} from './redux/EnadeAction';

class PesquisaInstituicao extends Component {
  constructor(props){
  	super(props);
  	this.state = {'campoPesquisa':'', 'tipoPesquisa':'instituicao',};
		this.setCampoPesquisa = this.setCampoPesquisa.bind(this);
		this.setCampoTipoPesquisa = this.setCampoTipoPesquisa.bind(this);
  }

  setCampoPesquisa(evento){
    this.setState({campoPesquisa:evento.target.value});
  }

  setCampoTipoPesquisa(evento){
    evento.preventDefault()
    this.setState({tipoPesquisa:evento.target.value, campoPesquisa:''});
  }

  pesquisa(evento){
		evento.preventDefault();
		const pesquisaList = {};
		pesquisaList['tipoPesquisa'] = this.state.tipoPesquisa;
		pesquisaList['campoPesquisa'] = parseFloat(this.state.campoPesquisa)?parseFloat(this.state.campoPesquisa):this.state.campoPesquisa.toString().trim();
		this.props.onSearchList(pesquisaList);
  }

  render() {
    return (
    	<div className="boxPesquisaInstituicao">
				<h3>Pesquisa de performance no Enade:</h3>
    		<form className="boxPesquisaInstituicao-form" onSubmit={this.pesquisa.bind(this)} method="post">
			    <table name="boxPesquisaInstituicaoInterna" id="boxPesquisaInstituicaoInterna" className="width100">
			      <tbody>
			      		<tr>
  								<td>
										<select className="tipopesquisa" onChange={this.setCampoTipoPesquisa}>
											<option value="instituicao">Instituição</option>
											<option value="curso">Curso</option>
											<option value="notaGeral">Nota Geral</option>
											<option value="notaCurso">Nota Curso</option>
											<option value="mediaAluno">Media Aluno</option>
										</select>
									</td>
			      			<td><input type="text" placeholder="Informe a pesquisa" name="pesquisa" className="width100" value={this.state.campoPesquisa} onChange={this.setCampoPesquisa}/></td>
			      			<td className="tdBotaoPesquisa"><button className="radios4px">Pesquisar</button></td>
			      		</tr>
			      </tbody>
			    </table>
		    </form>
		</div>
    );
  }
}

function mapStatetoProps(state){
	return {
			_performances: state.enade.performances,
	}
}

function mapDispachToProps(dispach){
	return bindActionCreators({onSearchList}, dispach)
}

export default connect(mapStatetoProps, mapDispachToProps)(PesquisaInstituicao);
