import { Component } from "react";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
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

    console.log("componentDidMount");

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
    console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
