import React from "react";
import { TouchableOpacityProps } from "react-native";
import dotsImage from '../../assets/images/dots.png';
import * as Styles from './styles';

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type CardProps = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({data, ...rest}: CardProps) {
  return (
    <Styles.PokemonCard type={data.types[0].type.name} {...rest}>
      <Styles.LeftSide>
        <Styles.PokemonId># {data.id}</Styles.PokemonId>
        <Styles.PokemonName>{data.name}</Styles.PokemonName>
        <Styles.ImageDetailLeftSide source={dotsImage} />
        <Styles.PokemonContentTypes>
          {data.types.map(pokemonTypes =>
            <Styles.PokemonType type={data.types[0].type.name}>
              <Styles.PokemonTypeText key={pokemonTypes.type.name}>
                {pokemonTypes.type.name}
              </Styles.PokemonTypeText>
            </Styles.PokemonType>
          )}
        </Styles.PokemonContentTypes>
      </Styles.LeftSide>
      {/* <Styles.RightSide></Styles.RightSide> */}
    </Styles.PokemonCard>
  );
}