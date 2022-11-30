import React from "react";
import * as Styled from './styles';
// import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from "lottie-react-native";
import pokeballAnimation from './pokeball.json';
import { Button } from "../../components/Button";

export function Welcome() {
  /* const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate('Home');
  } */

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.WrapperAnimation>
          <AnimatedLottieView autoPlay source={pokeballAnimation} loop />
        </Styled.WrapperAnimation>
        <Styled.Title>Bem Vindo</Styled.Title>
        <Styled.Subtitle>
          Encontre todos os pokémons em um só lugar
        </Styled.Subtitle>
      </Styled.Content>
      <Styled.Footer>
        <Button title='Iniciar' />
      </Styled.Footer>
    </Styled.Container>
  );
}
