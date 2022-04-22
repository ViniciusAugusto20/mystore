import styled from 'styled-components';
import { background, color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';

export const Container = styled.section`
  background-color: ${background.app};
  min-height: 100%;
  height: auto;

  > section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
  }
`;

export const MainContent = styled.section`
  width: auto;
  flex: 1;
  min-height: calc(100vh - 200px);
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 5px;
  bottom: 0;
  color: ${color.white};
  background-color: ${color.black};
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s0}px;
  font-weight: ${typography.weight.regular};
`;
