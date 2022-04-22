import React from 'react';

import { useProductContext } from '../../context/product';
import { ProductProps } from '../../models/product';

import { Slide, PageDefault } from '../../components';

import * as S from './style';

const Products: React.FC = () => {
  const { products } = useProductContext();

  return (
    <PageDefault>
      <S.ProductWrapper>
        {products.map((currentProduct: ProductProps) => {
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

export default Products;
