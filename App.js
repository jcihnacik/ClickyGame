import React, { Component } from "react";

import Wrapper from "./src/components/Wrapper";
import Header from "./src/components/Header";
import PlayingCard from "./src/components/PlayingCard";
import ScoreBoard from "./src/components/ScoreBoard";
import PlayingCardDeck from "./playingCardDeck.json";

class App extends Component {
  // Setting this.state.cards to the playing cards json array
  state = {
    cards
  };

  shuffleCards = arr => {
    arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]) 
  };

  // Map over this.state.cards and render a PlayingCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Clicky Card Game</Header>
        {this.state.cards.map(card => (
          <PlayingCard
            clickCard={this.shuffleCards}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.img}
            
          />

        ))}
        <ScoreBoard></ScoreBoard>
      </Wrapper>
    );
  }
}

export default App;
