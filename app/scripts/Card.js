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
      <div style={styles}>
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

let styles = {
  width: 340,
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}