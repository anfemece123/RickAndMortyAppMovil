import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Result} from '../interfaces/charactersInterface';

const useCharactersId = (characterId: number) => {
  const [loading, setLoading] = useState(true);
  const [characterForId, setCharacterForId] = useState<Result>();

  const charactersId = async () => {
    axios({
      method: 'get',
      url: `https://rickandmortyapi.com/api/character/${characterId}`,
    }).then(response => {
      setCharacterForId(response.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    charactersId();
  }, []);

  return {
    ...characterForId,
    loading,
  };
};

export default useCharactersId;
