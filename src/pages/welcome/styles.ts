import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  ${() => css`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.light_red};
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  `}
`;

export const IconContent = styled.View`
  width: 50%;
  height: 50%;
`;

export const WrapperAnimation = styled.View`
  ${() => css`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Footer = styled.View`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    padding: 20px;
  `}
`;

export const Title = styled.Text`
  ${() => css`
    margin-top: 15px;
    font-size: 30px;
    color: ${theme.colors.background};
  `}
`;

export const Subtitle = styled.Text`
  ${() => css`
    font-size: 14px;
    margin-top: 15px;
    color: ${theme.colors.background};
  `}
`;