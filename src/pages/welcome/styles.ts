import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  height: 70%;
`;

export const Footer = styled.View`
  ${() => css`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${theme.colors.backgroundCard.water};
    height: 70%;
  `}
`;
