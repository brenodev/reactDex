import React, { Component } from 'react'

// Custom Components

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a>ReactDex</a>
        </nav>
      </div>
    )
  }
}

export default NavBar