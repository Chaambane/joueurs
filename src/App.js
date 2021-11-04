import React, { Component } from 'react';
import JoueursManager from './containers/JoueursManager/JoueursManager';
import AffichageJoueurs from './containers/AffichageJoueurs/AffichageJoueurs';

class App extends Component {
  state= {
    refresh: false
  }

  // handleRefresh rafraichis l'ensemble des composant à la validation de la création d'un personnage afin de pouvoir l'afficher dans le composant AffichageJoueurs.
  handleRefresh = () => {
    this.setState(oldState => {
      return{
        refresh: !oldState.refresh
      }
    });
  }

  render() {
    return (
      <>
        <JoueursManager refresh={this.handleRefresh}/>
        <AffichageJoueurs refresh={this.state.refresh}/>
      </>
    );
  }
}

export default App;
