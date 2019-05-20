import React, { Component} from 'react';


class Home extends Component{
	constructor(props) {
    super(props);

    this.state = {
      data : this.props.file,
    };
  }

  //Método Search Input
  searchByName = (e) => {
    var query = e.target.value.toLowerCase();

    var coincidences = this.props.file.filter(function(shot) {
      var nameInLowerCase = shot.name.toLowerCase();

      return nameInLowerCase.includes(query);
    });

    this.setState({
      data: coincidences
    });
  }
  //Termina método
  
  render() {
    return (
       <div>
       		<div className= "container">
       			<div className="input-group mb-3">
	       			<input className="form-control" onChange={this.searchByName} type ="search" placeholder= "Buscador"/>
	       			<div className="input-group-append">
	       				<button className="btn btn-outline-secondary" id="button-addon2"><i class="fas fa-search"></i></button>
	       			</div>
	       		</div>
	       		
	       			{this.state.data.map((datos) => {
	             	return (
						<table className="table">
							<thead className="thead-dark">
								<tr>
									<th scope="col">Id Empleado</th>
									<th scope="col">Nombre</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>{datos.id}</th> 
									<th>{datos.name}</th>
								</tr>
							</tbody>
						</table>
					);
	              })
	       		}
       		</div>
     	</div>
    );
  }
}

export default Home;
