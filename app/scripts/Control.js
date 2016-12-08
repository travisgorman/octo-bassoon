import React from 'react';

const Control = React.createClass({
  handleChange(e){
    let name = e.target.value;
    let img = `assets/${name}.jpg`;
    this.props.onChange(name, img);
  },
  render() {
    return (  
      <select 
        style={styles}
        onChange={this.handleChange}>
        <option value="JACKIE">Jackie</option>
        <option value="MARLON">Marlon</option>
        <option value="TITO">Tito</option>
        <option value="JERMAINE">Jermaine</option>
        <option value="MICHAEL">Michael</option>
      </select>
    )
  }
});

export default Control;

let styles = {
  fontSize: 16,
  width: 180,
  margin: '1rem auto',
}


// two methods: a `handleChange` and a `render` 
// the `handleChange` takes an event object argument since it is used as an event handler
// STEP ONE: get variables from user input event 
// STEP TWO: call `this.props.onChange` and pass in the new variables.
// STEP THREE: render a menu with an `onChange` event listener that calls the change handler