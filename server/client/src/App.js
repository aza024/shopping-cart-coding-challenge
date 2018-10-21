import React, { Component } from 'react';
import './App.css';
import { userInfo } from 'os';

class App extends Component {
  state = { items: [] }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json()
      .then(items => this.setState({ items })
    ));
  }
  render() {
    return (
      <div className="App">
       <h1>Items</h1>
       <ul>
       {this.state.items.map(item => 
        <li>{item}</li>)}
       </ul>
      </div>
    );
  }
}

export default App;
