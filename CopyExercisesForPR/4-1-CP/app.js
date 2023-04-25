function calculate([, , action, num1, num2] = process.argv) {
    
    const actions = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "multiply": (a, b) => a * b,
      "division": (a, b) => a / b,
    };
  
    console.log(actions[action] ?. (parseInt(num1), parseInt(num2))); 
  }

  calculate();

/* Сделал через литералы объекта, думаю выносить операции в отдельные файлы не стоит
но если была старая реализация, где заморочено написаны условия, то тогда бы это имело смысл */