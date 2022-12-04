import styled, { css } from "styled-components/native";
import theme from '../../global/styles/theme';

type PokemonType = {
  type: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({type}) => css`
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ImageDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const PokemonId = styled.Text`
  ${() => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${() => css`
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    margin-top: 31px;
    text-transform: capitalize;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonContentTypes = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${(type) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${() => css`
    font-weigth: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.background};
    text-transform: capitalize;
  `}
`;