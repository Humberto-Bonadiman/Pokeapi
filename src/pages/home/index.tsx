import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import api from '../../services/api';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';

type PokemonTypes = {
  type: string;
}

type Pokemon = {
  id: number;
  url: string;
  name: string;
  types: PokemonTypes[];
}

type Request = {
  id: number;
  types: PokemonTypes[];
}

export function Home() {
  const { navigate } = useNavigation();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function getAllPokemons() {
    const response = await api.get('');
    const { results } = response.data;
    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const {id, types} = await getMoreInfo(pokemon.url);

        return {
          id,
          name: pokemon.name,
          types,
        }
      })
    );

    setPokemons(payloadPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const {id, types} = response.data;
    return {
      id,
      types
    };
  }

  function handleNavigationPokemonDetail(pokemonId: number) {
    navigate('About', {
      pokemonId,
    });
  }

  return (
    <Styled.Container>
      <FlatList
        keyExtractor={pokemon => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            onPress={() => {
              handleNavigationPokemonDetail(pokemon.id);
            }}
          />
        )}
      />
    </Styled.Container>
  )
};
