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

  componentDidMount(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error(err))
  }

  handleCharacterSelected = (selectedCharacterName) => {
    this.setState({selectedCharacterName: selectedCharacterName})
  }

  getSelectedCharacter = () => {
    const foundCharacter = this.state.characters.find(character => {
      return character.name === this.state.selectedCharacterName;
    })
    return foundCharacter;
  }

  render(){
    return (
      <section>
        <h1>This is the CharacterContainer</h1>
        <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
        <CharacterDetail selectedCharacter={this.getSelectedCharacter()}/>
      </section>
    )
  }

}

export default CharacterContainer;