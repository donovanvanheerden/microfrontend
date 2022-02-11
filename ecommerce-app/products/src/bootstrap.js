import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();

    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const devProducts = document.querySelector('#dev-products')

  // assuming our container does not have an element container id: dev-products
  if (devProducts) mount(devProducts)
}

export { mount };