import React from 'react';
import Display from './Display';
import Control from './Control';

const Card = React.createClass({
  getInitialState(){
    return {
      name: "JACKIE",
      img: "assets/JACKIE.jpg",
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

export default Card;