import { BASE_URL } from '../../config/env';
import { ProductProps } from '../../models/product';
import { getData, putData } from '../defaultServices';

export const getAllProducts = async (): Promise<ProductProps[]> => {
  const response = await getData(`${BASE_URL}/products`);
  return response;
};

export const addRemoveProductFromCart = async (
  product: ProductProps,
): Promise<ProductProps[]> => {
  const updateParams = {
    ...product,
    isInCart: !product.isInCart,
  };

  const response = await putData(
    `${BASE_URL}/products/${product.id}`,
    updateParams,
  );
  return response;
};
