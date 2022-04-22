import React, { useMemo, useState } from 'react';

import { useProductContext } from '../../context/product';

import { ProductProps } from '../../models/product';

import { Slide, PageDefault } from '../../components';

import * as S from './style';

const Home: React.FC = () => {
  const { products } = useProductContext();

  const [current, setCurrent] = useState(0);

  const nextSlide = (): void => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };

  const prevSlide = (): void => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  };

  const productWithLowerValue: ProductProps | undefined = useMemo(() => {
    if (products.length) {
      const lowerProduct = products.reduce(
        (productA: ProductProps, productB: ProductProps) => {
          return productA.price < productB.price ? productA : productB;
        },
      );
      return lowerProduct;
    }
    return undefined;
  }, [products]);

  return (
    <PageDefault>
      <S.PromotionalContainer>
        <S.TextSale>SUPER OFERTA</S.TextSale>
        {productWithLowerValue && <Slide product={productWithLowerValue} />}
      </S.PromotionalContainer>
      <S.SliderWrapper>
        <S.TextProducts>TODOS OS PRODUTOS</S.TextProducts>
        <S.ButtonBack className="left-arrow" onClick={prevSlide}>
          <S.IconBack />
        </S.ButtonBack>
        {products.map((currentSlide: ProductProps, index) => {
          return (
            <S.SliderContainer key={currentSlide.id}>
              {index === current && <Slide product={currentSlide} />}
            </S.SliderContainer>
          );
        })}
        <S.ButtonForward className="right-arrow" onClick={nextSlide}>
          <S.IconForward />
        </S.ButtonForward>
      </S.SliderWrapper>
    </PageDefault>
  );
};

export default Home;
