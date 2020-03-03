import React, {Fragment} from 'react';

function CharacterDetail({selectedCharacter}){
  if(!selectedCharacter) return null;
  return(
    <Fragment>
      <p>Name: {selectedCharacter.name}</p>
      <p>House: {selectedCharacter.house}</p>
      <p>Date of Birth: {selectedCharacter.dateOfBirth}</p>
      <p>Ancestry: {selectedCharacter.ancestry}</p>
    </Fragment>
  )
}

export default CharacterDetail;