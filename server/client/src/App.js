import React, { Component } from 'react';
import './App.css';
// import { userInfo } from 'os';

class App extends Component {
  // state = { items: [],
  //   search: '' }
  constructor(){
    super();
    this.state = {
      search: '',
      items: []
    }
  }
  
  updateSearch(e) {
    this.setState({search: e.target.value.substring(0,40)})
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json()
      .then(items => this.setState({ items })
    ));
  }

  render() {
    let filteredItems = this.state.items.filter(
      (item) => {
        return item.indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="App">
       <input type = "text" 
          value = {this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
       <ul>
         {filteredItems.map(item => 
          <li>{item}</li>)} 
       </ul> 
      </div>
    );
  }
}

export default App;
