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

