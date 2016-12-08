# Jackson Five 

Demonstration of the React UI programming pattern where a stateful component renders two child components: one to manipulate its internal state, and another to display content based on its internal state. 

```js
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
```
* The Parent component, `Card`, passes its state down to a child, `Display`, and a custom function down to another child, `Control`, as an event handler. 

* `Card` is a stateful component, so it has a `getInitialState` method that returns a `name` and an `img` property. These are the two dynamic properties that will be changed, and passed down as props. 

* To change the value of the two properties in state, `Card` declares a custom function called `changeCard` with a parameter for each value we intend to change and calls `this.setState()`, setting the state to the values passed into the `changeCard` function.  
* Finally, `Card` renders two child components, passing state to the presentational component, `Display`, and the state changing function to `Control`, as an `onChange` event handler.

```js
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
```

* `Display` is the presentational component, basically an empty scaffolding. Its sole purpose is to recieve the props passed to it, and render them as HTML-like JSX. 
* It contains a `propTypes` object, documenting which props it expects - in this case a `name`, and an `img`, both strings. 


```js
import React from 'react';

const Control = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired,
  },
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

```


* `Control` updates its sibling, `Display`, by changing the state of `Card`. 

* `Control` is passed the state changing custom function, `changeCard` as the value to it's `onChange` prop, which updates the state of its parent, `Card`, due to React's automatic binding.

* `Control` can't call `changeCard` directly, because it is currently taking an event object as its argument, and we want it to take a `newName` and `newImg`. We need a custom function to get the info we want FROM the event object, and pass it into `changeCard`. For this we have to declare a custom function, `handleChange`

* `handleChange` is called as an event handler in the render function.