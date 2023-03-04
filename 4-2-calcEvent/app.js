const myEmitter = require('./index');
const eventCalc = new myEmitter();

eventCalc.on("result", (result)=> console.log(result));

eventCalc.addListener("сложение", (a,b)=> {
    eventCalc.emit('result', a + b);
});

eventCalc.addListener("вычитание", (a,b)=> {
    eventCalc.emit('result', a - b)
});

eventCalc.addListener("умножение", (a,b)=> {
    eventCalc.emit('result', a * b);
});

eventCalc.addListener("деление", (a,b)=> {
    eventCalc.emit('result', a / b);
});

eventCalc.log('Калькулятор Эвент событий');

//коммент для пул реквеста в ветку new_branch
