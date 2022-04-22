import React, { useMemo } from 'react';

import { useProductContext } from '../../context/product';
import { formatterMoney } from '../../utils/formatterMoney';

import { ProductProps } from '../../models/product';

import { PageDefault } from '../../components';

import * as S from './style';

const Details: React.FC<ProductProps> = () => {
  const { productMoreInfo, updateCart, products } = useProductContext();

  const currentProduct: ProductProps | undefined = useMemo(() => {
    if (productMoreInfo) {
      return products.find((product) => product.id === productMoreInfo.id);
    }
    return undefined;
  }, [productMoreInfo, products]);

  return (
    <PageDefault>
      {currentProduct && (
        <S.Container>
          <S.TextInfoProductName>
            {currentProduct.name.toLowerCase()}
          </S.TextInfoProductName>
          <S.ImgWrapper>
            <img
              src={currentProduct.img}
              alt={`product_${currentProduct.name}`}
            />
          </S.ImgWrapper>
          {currentProduct.quantity_available > 0 ? (
            <S.CartContainer
              onClick={() => updateCart(currentProduct)}
              isInCart={currentProduct.isInCart}
            >
              <S.IconCart />
              <S.TextInfo>
                {currentProduct.isInCart
                  ? 'Remover do carrinho'
                  : 'Adicionar no carrinho'}
              </S.TextInfo>
            </S.CartContainer>
          ) : (
            <S.CartContainer disabled={true}>
              <S.TextInfo>Indisponível</S.TextInfo>
            </S.CartContainer>
          )}
          <S.ContainerDetails>
            <S.TextInfoProductPrice>
              {formatterMoney(currentProduct.price)}
            </S.TextInfoProductPrice>
            <S.TextDescription>{currentProduct.description}</S.TextDescription>
            {currentProduct.summary.map((summaryInfo: string) => (
              <S.TextSummary key={summaryInfo}>{summaryInfo}</S.TextSummary>
            ))}
          </S.ContainerDetails>
        </S.Container>
      )}
    </PageDefault>
  );
};

export default Details;
