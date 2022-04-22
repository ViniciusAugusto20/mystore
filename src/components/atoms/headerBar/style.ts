import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoShirtSharp, IoCartOutline, IoSearch } from 'react-icons/io5';
import { color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';
import { sizes } from '../../../assets/css/devices';

interface IAutoCompleteItens {
  show: boolean;
}
const customMedia = generateMedia({
  ...sizes,
});

export const Container = styled.header`
  padding: 10px 30px;
  display: grid;
  min-height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.4fr 1.6fr auto auto;
  grid-gap: 30px;
  background-color: black;

  ${customMedia.lessThan('tablet')`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0px;
      grid-row-gap: 30px;
    }
  `}
`;

export const TextTitle = styled.span`
  font-family: ${typography.type.primary};
  color: ${color.white};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.l2}px;
  cursor: pointer;
  width: min-content;
`;

export const IconSearch = styled(IoSearch)`
  width: 28px;
  height: 28px;
  margin: 0px 15px;
  margin-top: -5px;
  color: ${color.black};
  opacity: 0.5;
`;

export const IconProducts = styled(IoShirtSharp)`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  color: ${color.white};
`;

export const IconCart = styled(IoCartOutline)`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  color: ${color.white};
`;

export const ContainerAutoComplete = styled.div`
  display: flex;
  width: 100%;
  background-color: ${color.white};
  align-self: 'flex-start';
  height: 50px;
  align-items: center;
  justify-content: left;
  align-content: center;
`;

export const Row = styled.div`
  right: 0;
  margin: 0px !important;
  background-color: ${color.mediumBlack};
  height: 37px;
  cursor: pointer;
  width: 100%;
  max-width: 550px;
  text-align: center;
  flex-direction: row;
  border: 1px solid ${color.mediumBlack};
  p {
    padding-top: 8px;
    text-align: left;
    margin: 0px 20px;
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s1}px;
    font-weight: ${typography.weight.regular};
    color: ${color.white};
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
  &:hover {
    background-color: ${color.mediumBlack};
  }
`;

export const ContainerOptions = styled.div<IAutoCompleteItens>`
  overflow-x: hidden;
  width: auto;
  min-width: fit-content;
  overflow-y: initial;
  z-index: 102;
  position: absolute;
  display: flex;
  flex-direction: column;
  ${customMedia.lessThan('tablet')`
      max-width: 300px;
      min-width: 150px;
      width: auto;
    }
  `}
`;

export const Selector = styled.input`
  appearance: none;
  width: 100%;
  max-width: 600px;
  height: 40px;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.bold};
  cursor: 'pointer';
  border: none;
  color: ${color.black};
  background: none;
  text-align: left;
  letter-spacing: 0px;
  ::placeholder {
    color: ${color.black};
    opacity: 0.5;
    font-family: ${typography.type.primary};
  }
  &:-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
    border: none;
    color: ${color.black};
    background: none;
    opacity: 1;
    ::placeholder {
      color: white;
    }
  }
`;

export const ProuctsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  width: fit-content;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  width: fit-content;
`;

export const BoxAutoComplate = styled.div``;
