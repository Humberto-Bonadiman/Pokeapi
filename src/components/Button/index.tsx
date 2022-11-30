import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as Styled from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps;

export function Button({title}: Props) {
  return(
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
}