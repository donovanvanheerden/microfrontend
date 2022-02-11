import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

const productsElement = document.querySelector('#c-products');
const cartElement = document.querySelector('#c-cart');

productsMount(productsElement);
cartMount(cartElement);