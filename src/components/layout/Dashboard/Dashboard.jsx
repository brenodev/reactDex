import React, { Component } from 'react'

// Custom Components

import PokemonList from '../../PokemonList'

class Dashboard extends Component {
  render() {
    return(
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    )
  }
}

export default Dashboard