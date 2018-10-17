import React, { Component } from 'react';
import "./App.css";
import Header from "../components/Header";
import Background from "../components/Background";
import CardList from "../components/CardList";

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    const urls = [
      "https://swapi.co/api/people/"
    ];

    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
      .then(array => {
        this.setState({ people: array[0].results });
      })
      .catch(error => console.log("failed", error));
  }

	render() {
		return (
			<div className="App">
        <Background />
        <div>
          <Header />
          <div className="CardList">  
            <CardList array={this.state.people} />
          </div>
        </div>
      </div>
		);
	}	
}

export default App;
