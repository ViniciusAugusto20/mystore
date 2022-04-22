import { Home, Products, Details, Cart } from '../pages';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    isPrivate: false,
  },
  {
    path: '/products',
    name: 'Product',
    component: Products,
    isPrivate: false,
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    isPrivate: false,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    isPrivate: false,
  },
];

export default routes;
