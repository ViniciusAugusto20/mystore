/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, createContext, useEffect } from 'react';
import { ProductProps } from '../models/product';
import {
  addRemoveProductFromCart,
  getAllProducts,
} from '../services/products/productsService';
import { useToast } from './toast';

type ProductProviderProps = {
  setProducts: (products: ProductProps[]) => void;
  products: ProductProps[];
  updateCart: (products: ProductProps) => void;
  getProducts: (value: void) => void;
  productMoreInfo?: ProductProps;
  setProductMoreInfo: (products: ProductProps) => void;
};

export const ProductContext = createContext<ProductProviderProps>(
  {} as ProductProviderProps,
);

export const ProductProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productMoreInfo, setProductMoreInfo] = useState<ProductProps>();
  const getProducts = async (): Promise<void> => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      addToast({
        type: 'error',
        content: 'Erro ao buscar os produtos.',
      });
    }
  };

  const updateCart = async (updateProduct: ProductProps): Promise<void> => {
    try {
      await addRemoveProductFromCart(updateProduct);
      setProductMoreInfo(updateProduct);
      await getProducts();
      addToast({
        type: 'success',
        content: updateProduct.isInCart
          ? 'Produto removido do carrinho.'
          : 'Produto adicionado ao carrinho.',
      });
    } catch (err) {
      addToast({
        type: 'error',
        content: 'Erro ao alterar o produto.',
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        updateCart,
        getProducts,
        productMoreInfo,
        setProductMoreInfo,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = (): ProductProviderProps =>
  useContext(ProductContext);
