const income = prompt('Ваш доход:');
let tax;
let taxAmount;

if (+income < 15000) {
  tax = income * 0.13;
  console.log(`Налог 13%, сумма налога ${tax}`);
} else if (income >= 15000 && income <= 50000) {
  taxAmount = income - 15000;
  tax = taxAmount * 0.2;
  console.log(`Налог 20% от суммы ${taxAmount}, сумма налога ${tax}`);
} else if (income > 50000) {
  taxAmount = income - 50000;
  tax = taxAmount * 0.3;
  console.log(`Налог 30% от суммы ${taxAmount}, сумма налога ${tax}`);
}