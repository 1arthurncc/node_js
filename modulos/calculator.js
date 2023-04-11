
module.exports = {
    soma: function (a, b) {
      return a + b;
    },
    subtracao: function (a, b) {
      return a - b;
    },
    multiplicacao: function (a, b) {
      return a * b;
    },
    divisao: function (a, b) {
        if (b == 0) {
            throw new error("cannot divide by zero");
          }  
      return a / b;
    }
  };
  