export const calcTotalPrice = (items, currency) => {
  return items.reduce((sum, obj) => {
    return (sum += calcPriceForOneProducts(obj, currency));
  }, 0);
};

const calcPriceForOneProducts = (item, currency) => {
  const actualProductCurrency = currency.find((el) => el.ccy === item.iso);
  return item.discount_percent
    ? (item.base_price - (item.base_price * item.discount_percent) / 100) *
        item.qty *
        actualProductCurrency.sale
    : item.base_price * item.qty * actualProductCurrency.sale;
};

// base_ccy: 'UAH';
// buy: '36.56860';
// ccy: 'USD';
// sale: '37.45318';
