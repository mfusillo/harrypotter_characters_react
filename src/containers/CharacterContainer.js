import React, {Component} from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ""
    }
  }

  render(){
    return (
      <section>
        <h1>This is the CharacterContainer</h1>
        <CharacterSelector />
        <CharacterDetail />
      </section>
    )
  }

}

export default CharacterContainer;