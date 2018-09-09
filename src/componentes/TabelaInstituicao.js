import React, { Component } from 'react';
import PesquisaInstituicao from './PesquisaInstituicao';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onLoadList} from './redux/EnadeAction';


class TabelaInstituicao extends Component {

	componentWillMount() {
		this.props.onLoadList(this);
	}

  render() {
    return (
    	<div className="listagemInstituicao">
    		<div className="containerPesquisa">
	    		<PesquisaInstituicao />
					<h3>Resultado:</h3>
          <div className="lisInstituicao">
  			    <table>
  			      <thead>
  			        <tr>
  			          <th>Instituição</th>
  			          <th>Curso</th>
  			          <th>Nota Geral</th>
  			          <th>Nota Curso</th>
  			          <th>Media Aluno</th>
  			        </tr>
  			      </thead>
  			      <tbody>
  			      	{
									this.props._performances.map(function(performance){
										return(
											<tr key={performance.instituition.id+'-'+performance.course.name}>
												<td>{performance.instituition.fantasyname}</td>
												<td>{performance.course.name}</td>
												<td>{performance.instituition.note}</td>
												<td>{performance.course.note}</td>
												<td>{performance.student.average}</td>
											</tr>
										);
									})
  					    }
  			      </tbody>
  			    </table>
          </div>
		    </div>
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
	return bindActionCreators({onLoadList}, dispach)
}

export default connect(mapStatetoProps, mapDispachToProps)(TabelaInstituicao);
