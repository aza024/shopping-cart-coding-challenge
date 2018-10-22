import React, { Component } from 'react';
import './App.css';


class App extends Component {
  // state = { items: [],
  //   search: '' }
  constructor(){
    super();
    this.state = {
      search: '',
      items: [],
      kart: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  updateSearch(e) {
    this.setState({search: e.target.value.substring(0,40)})
  }
  
  onFormSubmit(e){
    e.preventDefault()
    console.log('hello')
    if (this.state.items.indexOf(e.target[0].value) !== -1){
      this.setState({
        kart: this.state.kart.concat([e.target[0].value])
      })
    }
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json()
      .then(items => this.setState({ items })
    ));
  }

  render() {
    let filteredItems = []
    let kartItems = []

    if(this.state.search !== ''){
      filteredItems = this.state.items.filter(
        (item) => {
          return item.indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
    }
     
    return (
      <div className="App">
      <header className = "header">FullStack Kart</header>
      <div class = "mainPage">
      <aside className = "sidebar">Home</aside>
      <div className = "form">
       <form onSubmit={ this.onFormSubmit } id="taskForm">
       <input type = "text" 
          value = {this.state.search}
          onChange={
            this.updateSearch.bind(this)
          }
        />
        <button type="submit">Add</button>
       <div className = "itemsList">
         {filteredItems.map(item => 
          <li>{item}</li>)} 
       </div> 

       <div className = "kart">
       <h1> Kart </h1>
        {this.state.kart}
       </div>

       </form>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
