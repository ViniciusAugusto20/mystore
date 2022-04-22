import React, { useMemo } from 'react';

import { useProductContext } from '../../context/product';

import { ProductProps } from '../../models/product';

import { Slide, PageDefault } from '../../components';

import * as S from './style';

const Cart: React.FC = () => {
  const { products } = useProductContext();

  const productOnCart = useMemo(() => {
    return products.filter((product) => product.isInCart === true);
  }, [products]);

  return (
    <PageDefault>
      <S.ProductWrapper>
        {productOnCart.map((currentProduct: ProductProps) => {
          return (
            <S.ProductContainer key={currentProduct.id}>
              <Slide product={currentProduct} />
            </S.ProductContainer>
          );
        })}
      </S.ProductWrapper>
    </PageDefault>
  );
};

export default Cart;
