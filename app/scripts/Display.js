import React from 'react';

function Display(props){
  return (
    <div style={styles} >
      <h1 style={{ fontSize: 20 }}>{props.name} JACKSON</h1>
      <img style={imgStyles} src={props.img}/>
    </div>
  );
}

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

Display.propTypes = {
  name: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
}

export default Display;

// The purpose of this component is to display props given to it
// propTypes is optional. it shows the props the component expects to recieve
// It is a "presentational" component
// STEP ONE: render an element containing html elements we want to inject the props into
// That's all. 
