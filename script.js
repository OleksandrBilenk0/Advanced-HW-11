const getValue = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Date.now().toString().slice();
      resolve(String.fromCharCode(value));
      reject(Error("Whoops!"));
    }, 50);
  });
  
};

console.log(Date.now().toString().slice(-5))

async function getRandomChinese(length) {
  let str = "";
  let i = 0;
  while (i < length) {
    str += await getValue(length);
    i++;
  }
  return str;
  
};

getRandomChinese(4).then((result) => {
  console.log(result);
});

// Створіть функцію, яка повертає проміс getRandomChinese(length).
// Функція працює таким чином:
// Запускається цикл (підказка: можна використовувати while) length раз, кожен
// прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now()
// Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з
// китайськими ієрогліфами.
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms