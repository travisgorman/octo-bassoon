import React from 'react';
import ReactDOM from 'react-dom';

let app = document.getElementById('page');

const Card = React.createClass({
  getInitialState(){
    return {
      name: "JACKIE"
    }
  },
  changeCard(newName){
    return this.setState({
      name: newName,
    })
  },
  render(){
    return (  
      <div className="card" >
        <Display name={this.state.name} />
        <Control onChange={this.changeCard} />
      </div>
    );
  }
});

const Display = React.createClass({
  render(){
    return (  
      <div className="display">
        <h1> {this.props.name} </h1>
        <img src="assets/JACKIE.jpg" />
      </div>
    );
  }
});

const Control = React.createClass({
  handleChange(e){
    let name = e.target.value;
    this.props.onChange(name)
  },
  render(){
    return (  
      <select 
        className="control"
        name="names" 
        id="names"
        onChange={this.handleChange}>
        <option value="JACKIE">Jackie</option>
        <option value="MARLON">Marlon</option>
        <option value="TITO">Tito</option>
        <option value="JERMAINE">Jermaine</option>
        <option value="MICHAEL">Michael</option>
      </select>
    );
  }
});

ReactDOM.render(  
  <Card />, app
)