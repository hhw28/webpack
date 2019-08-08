import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  render(){
    const x = 'react';
    return <div>hello world! {x}</div>
  }
}

ReactDom.render(
  <App />, 
  document.getElementById('root')
)