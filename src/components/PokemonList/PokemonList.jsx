import React, { Component } from 'react'
import axios from 'axios'

// Custom Components 
import PokemonCard from '../PokemonCard'

class PokemonList extends Component {

  state = {
    url: 'https://pokeapi.co/api/v2/pokemon',
    pokemon: null,
  }

  async componentDidMount() {
    const res = await axios(this.state.url)
    this.setState({
      pokemon: res.data['results']
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard />
            ))}
          </div>
        ) : (
          <h1>Loading Pokémon</h1>
        )}
      </React.Fragment>
    )
  }
}

export default PokemonList