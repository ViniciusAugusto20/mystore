import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { color } from '../../assets/css/color';
import { typography } from '../../assets/css/typography';
import { sizes } from '../../assets/css/devices';

const customMedia = generateMedia({
  ...sizes,
});
export const TextInfo = styled.span`
  padding: 20px;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.l1}px;
  color: ${color.black};
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  ${customMedia.lessThan('smallTablet')`
       margin-bottom: 50px;
    }
  `}
`;

export const IconBack = styled(IoChevronBack)`
  position: absolute;
  top: 50%;
  left: calc(100vw - 70vw);
  font-size: 2rem;
  width: 64px;
  height: 64px;
  margin-right: 30px;
  color: ${color.black};
  cursor: pointer;
  ${customMedia.lessThan('laptop')`
        left: calc(100vw - 90vw);
        top: 45%;
        width: 32px;
        height: 32px;
    }
  `}
`;

export const ButtonBack = styled.button`
  display: block;
  background: transparent;
  border: none;
  z-index: 100;
`;

export const IconForward = styled(IoChevronForward)`
  position: absolute;
  top: 50%;
  right: calc(100vw - 70vw);
  font-size: 2rem;
  width: 64px;
  height: 64px;
  margin-left: 30px;
  color: ${color.black};
  cursor: pointer;
  ${customMedia.lessThan('laptop')`
        right: calc(100vw - 90vw);
        top: 45%;
        width: 32px;
        height: 32px;
    }
  `}
`;

export const ButtonForward = styled.button`
  display: block;
  background: transparent;
  border: none;
  z-index: 100;
`;

export const SliderContainer = styled.div``;

export const PromotionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const TextSale = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.l1}px;
  color: ${color.red};
  margin-bottom: 20px;
`;

export const TextProducts = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.l1}px;
  color: ${color.black};
  margin-bottom: 20px;
`;
