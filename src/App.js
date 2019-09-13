import React, { Component } from "react";
import CharacterCard from "./components/characterCard/CharacterCard";
import "./App.scss";

const url = "https://rickandmortyapi.com/api/character/";

class App extends Component {
  state = {
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data });
  };

  render() {
    return (
      <div className="cards-container">
        {this.state.data.results.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default App;
