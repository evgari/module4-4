'use strict';
{
  const product = 'Xiaomi 12 Lite';
  const count = 8;
  const category = 'smartphones';
  const price = 27490;
  const totalPrice = price * count;

  // console.log(product);
  // console.log(totalPrice);
}

{
  const product = prompt('Наименование товара');
  const count = prompt('Количество товара');
  const category = prompt('Категория товара');
  const price = prompt( 'Цена товара');
  const totalPrice = count * price;

  if (isNaN(count) || isNaN(price)) {
    alert('Вы ввели некорректные данные');
  } else {
    console.log(typeof product);
    console.log(typeof +count);
    console.log(typeof category);
    console.log(typeof +price);
    console.log(`На складе ${count} единицы товара ${product} на сумму ${totalPrice} рублей`);
  }
}









