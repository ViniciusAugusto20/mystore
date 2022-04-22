import React from 'react';
import { useHistory } from 'react-router-dom';

import { useProductContext } from '../../../context/product';

import { formatterMoney } from '../../../utils/formatterMoney';

import { ProductProps } from '../../../models/product';

import { SlideProps } from './types';

import * as S from './styles';

const Slide: React.FC<SlideProps> = ({ product }: SlideProps) => {
  const history = useHistory();
  const { updateCart, setProductMoreInfo } = useProductContext();

  const handleSeeMoreInfo = (selectedProduct: ProductProps): void => {
    setProductMoreInfo(selectedProduct);
    history.push('/details');
  };
  return (
    <S.Container key={product.id}>
      <S.ImgWrapper onClick={() => handleSeeMoreInfo(product)}>
        <img src={product.img} alt={`product_${product.name}`} />
      </S.ImgWrapper>
      <S.TextInfoProductName
        className="productInfos"
        onClick={() => handleSeeMoreInfo(product)}
      >
        {product.name.toLowerCase()}
      </S.TextInfoProductName>
      <S.TextInfoProductPrice
        className="productInfos"
        onClick={() => handleSeeMoreInfo(product)}
      >
        {formatterMoney(product.price)}
      </S.TextInfoProductPrice>
      {product && product.quantity_available > 0 ? (
        <S.CartContainer
          onClick={() => updateCart(product)}
          isInCart={product.isInCart}
        >
          <S.IconCart />
          <S.TextInfo>
            {product.isInCart ? 'Remover do carrinho' : 'Adicionar no carrinho'}
          </S.TextInfo>
        </S.CartContainer>
      ) : (
        <S.CartContainer disabled={true}>
          <S.TextInfo>Indisponível</S.TextInfo>
        </S.CartContainer>
      )}
    </S.Container>
  );
};

export default Slide;
