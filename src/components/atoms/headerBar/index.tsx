/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProductContext } from '../../../context/product';
import { ProductProps } from '../../../models/product';

import * as S from './style';

const HeaderBar: React.FC = () => {
  const history = useHistory();
  const { products, setProductMoreInfo, getProducts } = useProductContext();

  const [searchValue, setSearchValue] = useState<number | string>();
  const [filteredOptions, setFilteredOptions] = useState<ProductProps[]>();

  const findProductById = (value: number): ProductProps[] => {
    const options = products.filter((optionName) => optionName.id === value);
    setFilteredOptions(options);
    return options;
  };

  const findProductByName = (value: string): ProductProps[] => {
    const options = products.filter((optionName) =>
      optionName.name.toLowerCase().startsWith(value.toLowerCase()),
    );
    setFilteredOptions(options);
    return options;
  };

  const handleChange = (value: number | string): void => {
    const isNumber = !Number.isNaN(Number(value));
    setSearchValue(value);
    if (isNumber && value) {
      findProductById(+value);
    } else if (!isNumber && value.toString().length >= 3) {
      findProductByName(value.toString());
    } else {
      setFilteredOptions([]);
    }
  };
  const handleSelectOption = (selectedProduct: ProductProps): void => {
    setFilteredOptions([]);
    setProductMoreInfo(selectedProduct);
    setSearchValue(undefined);
    history.push('/details');
  };

  const handleBackHome = (): void => {
    history.push('/');
    getProducts();
    setSearchValue(undefined);
  };

  return (
    <S.Container>
      <S.TextTitle onClick={() => handleBackHome()} id="qa-button-home">
        MYSTORE
      </S.TextTitle>
      <S.BoxAutoComplate>
        <S.ContainerAutoComplete>
          <S.IconSearch />
          <S.Selector
            id="qa-search"
            placeholder="Busca"
            value={searchValue || ''}
            onChange={(event) => handleChange(event.target.value)}
          />
        </S.ContainerAutoComplete>
        <S.ContainerOptions show={!!filteredOptions}>
          {filteredOptions ? (
            filteredOptions?.map((currentProduct) => (
              <S.Row
                id={`qa-find-search-${currentProduct.id}`}
                key={String(currentProduct.id)}
                onClick={() => handleSelectOption(currentProduct)}
              >
                <p> {currentProduct.name.toLowerCase()}</p>
              </S.Row>
            ))
          ) : (
            <></>
          )}
        </S.ContainerOptions>
      </S.BoxAutoComplate>
      <S.ProuctsContainer onClick={() => history.push('/products')}>
        <S.IconProducts />
        <span>Todos os produtos</span>
      </S.ProuctsContainer>
      <S.CartContainer onClick={() => history.push('/cart')}>
        <S.IconCart />
        <span>Meu Carrinho</span>
      </S.CartContainer>
    </S.Container>
  );
};

export default HeaderBar;
