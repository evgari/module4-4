const income = prompt('Ваш доход:');
let tax;

if (+income < 15000) {
  tax = income * 0.13;
  console.log(`Налог 13%, сумма налога ${tax}`);
} else if (income >= 15000 && income <= 50000) {
  tax = income * 0.2;
  console.log(`Налог 20%, сумма налога ${tax}`);
} else if (income > 50000) {
  tax = income * 0.3;
  console.log(`Налог 30%, сумма налога ${tax}`);
}