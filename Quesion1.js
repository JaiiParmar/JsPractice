const multiplyByNum = function(num) {
  const funInner = function(x) {
    return num * x;
  };

  return funInner;
};

const multiplyBy10 = multiplyByNum(10);

const multiplyBy100 = multiplyByNum(100);

debugger;
console.log(multiplyBy10(4));

debugger;
console.log(multiplyBy100(4));
