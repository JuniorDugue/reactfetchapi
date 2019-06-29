import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

    render(){
      return (
        <div className="App">

      </div>
    );
  }
}

export default App;
