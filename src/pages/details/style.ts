import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoCartOutline } from 'react-icons/io5';
import { color } from '../../assets/css/color';
import { typography } from '../../assets/css/typography';
import { sizes } from '../../assets/css/devices';

import { CartContainerProps } from './types';

const customMedia = generateMedia({
  ...sizes,
});

export const ImgWrapper = styled.div`
  img {
    display: block;
    height: 460px;
    max-width: 400px;
    border-radius: 15px;
    margin: 0px 20px;
    ${customMedia.lessThan('smallTablet')`
       height: 380px;
       max-width: 280px;
    }
  `}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  ${customMedia.lessThan('laptop')`
      grid-template-columns: repeat(1, 1fr);
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: center;
      padding: 20px 40px;
    }
  `}
`;

export const IconCart = styled(IoCartOutline)`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  color: ${color.black};
`;

export const CartContainer = styled.div<CartContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px 0px;
  border: 1px solid
    ${(props) => (props.isInCart ? color.green : color.mediumBlack)};
  background-color: ${(props) =>
    props.disabled ? color.lightGray : color.white};
  border-radius: 15px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  height: 40px;
  max-width: 400px;
  width: 100%;
  svg {
    color: ${(props) => (props.isInCart ? color.green : color.black)};
  }
  span {
    color: ${(props) => (props.isInCart ? color.green : color.black)};
  }
`;

export const TextInfo = styled.span`
  font-family: ${typography.type.primary};
  color: ${color.black};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s1}px;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  max-width: 400px;
  width: 100%;
  font-family: ${typography.type.primary};
`;

export const TextInfoProductName = styled.span`
  color: ${color.black};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m2}px;
  margin-bottom: 30px;
  text-transform: capitalize;
`;

export const TextDescription = styled.span`
  color: ${color.gray};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2}px;
  margin-bottom: 30px;
`;

export const TextInfoProductPrice = styled.span`
  justify-content: center;
  text-align: center;
  color: ${color.red};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s4}px;
  margin: 20px 0px;
`;

export const TextSummary = styled.li`
  justify-content: start;
  text-align: left;
  color: ${color.gray};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s1}px;
  margin: 5px 0px;
`;
