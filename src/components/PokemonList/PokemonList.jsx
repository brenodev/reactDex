import React, { Component } from 'react'

// Custom Components 
import PokemonCard from '../PokemonCard'

class PokemonList extends Component {
  render() {
    return (
      <div className="row">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    )
  }
}

export default PokemonList