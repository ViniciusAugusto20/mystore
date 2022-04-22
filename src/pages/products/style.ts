import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { sizes } from '../../assets/css/devices';

const customMedia = generateMedia({
  ...sizes,
});

export const ProductContainer = styled.div``;

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  ${customMedia.lessThan('laptop')`
      grid-template-columns: repeat(1, 1fr);
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: center;
      margin: 40px 0px;
    }
  `}
`;
