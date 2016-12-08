import React from 'react';

const Display = React.createClass({
  render(){
    return (  
      <div className="display" >
        <h1>{this.props.name} JACKSON</h1>
        <img src={this.props.img} />
      </div>
    );
  }
});

export default Display;

// The purpose of this component is to display props given to it
// propTypes is optional. it shows the props the component expects to recieve
// It is a "presentational" component
// STEP ONE: render an element containing html elements we want to inject the props into
// That's all. 
