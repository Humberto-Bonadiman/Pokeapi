import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  ${() => css`
    width: 100%;
    heigth: 50px;
    background-color: ${theme.colors.light_red};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  `}
`;

export const Title = styled.Text`
  ${() => css`
    font-size: 14px;
    padding: 15px;
    color: ${theme.colors.background};
  `}
`;