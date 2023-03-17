import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Result} from '../interfaces/charactersInterface';

interface CharacterState {
  characters: Result[];
}

const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharacterState>({characters: []});

  const charactersAll = async () => {
    axios({
      method: 'get',
      url: 'https://rickandmortyapi.com/api/character',
    }).then(response => {
      setCharacter({characters: response.data.results});
      setLoading(false);
    });
  };
  useEffect(() => {
    charactersAll();
  }, []);

  return {
    ...character,
    loading,
  };
};

export default useCharacters;
