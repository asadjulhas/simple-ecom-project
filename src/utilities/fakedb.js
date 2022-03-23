const cartTotalAmmount = (products) => {
  const countTotal = (x, y) => x + y.price;
  const totalAmmount = products.reduce(countTotal,0);
  return totalAmmount;
}

export {cartTotalAmmount};