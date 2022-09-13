{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  }

  if (rain === 0) {
    console.log('Дождя нет!');
  }
}

{
  const math = prompt('Введите кол-во баллов по математике:');
  const rusLanguage = prompt('Введите кол-во баллов по русскому языку:');
  const informatics = prompt('Введите кол-во баллов по информатике:');
  const points = Number(math) + Number(rusLanguage) + Number(informatics);

  if (points >= 265) {
    alert('Поздравляю, вы поступили на бюджет!');
  }
}

{
  const sum = prompt('Сколько денег вы хотите снять?');

  sum % 100 === 0 ? alert('Банкомат сможет выдать желаемую сумму') : 
    alert('Банкомат не сможет выдать желаемую сумму');
}

