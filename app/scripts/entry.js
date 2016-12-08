import React from 'react';
import ReactDOM from 'react-dom';
let app = document.getElementById('page');

const Card = React.createClass({
  getInitialState(){
    return {
      name: "JACKIE",
      img: "assets/jackie.jpg"
    }
  },
  changeCard(newName, newImg){
    return this.setState({
      name: newName,
      img: newImg,
    })
  },
  render(){
    return (  
      <div className="card" >
        <Display 
          name={this.state.name} 
          img={this.state.img} />
        <Control 
          onChange={this.changeCard} />
      </div>
    );
  }
});

const Display = React.createClass({
  render(){
    let name = this.props.name;
    let img = this.props.img;
    return (  
      <div className="display">
        <h1> {name} </h1>
        <img src={img} />
      </div>
    );
  }
});

const Control = React.createClass({
  handleChange(e){
    let name = e.target.value;
    let jpg = name + '.jpg';
    let img = 'assets/' + jpg;

    this.props.onChange(name, img)
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