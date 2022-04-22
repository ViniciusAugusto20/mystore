# My Store

## :mag: Who is

This project is a simple model of clothing store. More details see the following gif.

![](/public/demonstrationGif.gif)

## :building_construction: Stack
This project was developed with the following technologies:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [React-Icons](https://react-icons.github.io/react-icons/)

In the development of the project, in addition to the technologies already mentioned, it was also used [Context Api](https://pt-br.reactjs.org/docs/context.html) and [Husky](https://github.com/typicode/husky). The code organization and sctruction is basead on the Atomic Design :atom_symbol:.

## :rocket: Startup

__Backend__

For the backend of this project it is necessary to have [Json-server](https://www.npmjs.com/package/json-server) installed globally. So after having the same installed, to run the project it is necessary to go to the mock folder (`src/assets/mock`) and execute the command below:

```
json-server --watch db.json --port 5555
```

__Frontend__


```js
  yarn install
```

Later

```js
  yarn start
```


## How works the application

The Project consists of 4 pages, the Home page, which is composed of a carousel with all available products, in addition to also containing the lowest value product of all. On this page, when hovering the mouse over the product, the name of the product is informed, as well as its value. You can also add products to the cart on this page (except those listed as unavailable).

When clicking on a product, the user is directed to the product details screen, where it is possible to add the product to the cart (unless there is no stock), view the price, description of the part and more details.

At the top of the application (common to all pages) we have the name of the store and right next to an autofill selector, where it is necessary to type the first 3 letters of the desired product. The selector displays a list of all products found with the given letters. It is also possible to search by id (eg 3). In the list of products found, it is possible to click on the item and, when done, the user is forwarded to the details screen described above.

Next to autofill, we have access to the “All products” page, where, when clicking, the user is directed to a grid listing all available products. You can also add products to the cart on this page (except those listed as unavailable).

And finally, next to “All products” we have the option of “My Cart”, where, when clicking, the user will see all the items added to the cart by him. You can also remove and view items on this page.

