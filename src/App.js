import { Component } from "react";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // My implementation
    // const usersPromise = await fetch(
    //   "https://jsonplaceholder.typicode.com/users",
    //   {
    //     method: "GET",
    //     headers: {},
    //   }
    // );
    // const users = await usersPromise.json();
    // this.setState({ monsters: users });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
