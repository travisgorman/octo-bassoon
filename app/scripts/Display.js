import React from 'react';

const Display = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
  },
  render() {
    return (  
      <div style={styles}>
        <h1 style={{ fontSize: 20 }}>
          {this.props.name} JACKSON
        </h1>
        <img style={imgStyles}
          src={this.props.img} />
      </div>
    );
  }
});

export default Display;

let styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1.3rem',
  color: '#333',
  fontFamily: 'sans-serif'
}
let imgStyles = {
  width: 250,
  borderRadius: '50%'
}
// The purpose of this component is to display props given to it
// propTypes is optional. it shows the props the component expects to recieve
// It is a "presentational" component
// STEP ONE: render an element containing html elements we want to inject the props into
// That's all. 
