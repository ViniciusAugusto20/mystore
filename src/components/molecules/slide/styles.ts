import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoCartOutline } from 'react-icons/io5';
import { color } from '../../../assets/css/color';
import { CartContainerProps } from './types';
import { typography } from '../../../assets/css/typography';
import { sizes } from '../../../assets/css/devices';

const customMedia = generateMedia({
  ...sizes,
});

export const TextInfoProductName = styled.span`
  font-family: ${typography.type.primary};
  color: ${color.black};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s4}px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  text-transform: capitalize;
`;

export const TextInfoProductPrice = styled.span`
  font-family: ${typography.type.primary};
  color: ${color.black};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s4}px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const ImgWrapper = styled.div`
  img {
    display: block;
    height: 460px;
    max-width: 400px;
    border-radius: 15px;
    transition: 0.5s ease;
    opacity: 1;
    ${customMedia.lessThan('smallTablet')`
       height: 380px;
       max-width: 280px;
    }
  `}
  }
`;

export const Container = styled.div`
  transition: all 0.3s ease-out;
  display: block;
  position: relative;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover img {
    opacity: 0.3;
  }
  &:hover .productInfos {
    opacity: 1;
  }
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
