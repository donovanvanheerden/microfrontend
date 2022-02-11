import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  element.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const devCart = document.querySelector('#dev-cart')

  // assuming our container does not have an element container id: dev-products
  if (devCart) mount(devCart)
}

export { mount }
