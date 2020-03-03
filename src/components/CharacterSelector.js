import React from 'react';

function CharacterSelector({characters, onCharacterSelected}){
  
  const options = characters.map((character) => {
    return (
      <option value={character.name} key={character.name}>{character.name}</option>
    )
  })

  const handleSelect = (event) => {
    onCharacterSelected(event.target.value);
  }
  
  return(
    <select onChange={handleSelect}>
      <option defaultValue="select a character">Select a character</option>
      {options}
    </select>
  );

}

export default CharacterSelector;