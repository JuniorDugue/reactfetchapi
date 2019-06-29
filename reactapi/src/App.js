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
      const {isLoaded, items} = this.state;

      if(!isLoaded){
        return <div>Loading...</div>
      }

        else{

          return (
            <div className="App">
              {/* Data has been loaded. */}
              <ul>
                {items.map(item =>(
                  <li key={item.id}>
                    Name: {item.name} | Email: {item.email}
                  </li>  
                ))}
              </ul>
            </div>
      );
    }
  }
}

export default App;
