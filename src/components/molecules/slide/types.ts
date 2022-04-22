import { ProductProps } from '../../../models/product';

export type SlideProps = {
  product: ProductProps;
};

export type CartContainerProps = {
  disabled?: boolean;
  isInCart?: boolean;
};
