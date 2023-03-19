const MyEmitter = require('events');
const eventCalc = new MyEmitter();

    eventCalc.on("сложение", (a,b)=> {
        eventCalc.emit('result', a + b);
    });
    eventCalc.on("вычитание", (a,b)=> {
        eventCalc.emit('result', a - b)
    });
    
    eventCalc.on("умножение", (a,b)=> {
        eventCalc.emit('result', a * b);
    });
    
    eventCalc.on("деление", (a,b)=> {
        eventCalc.emit('result', a / b);
    });

    eventCalc.on("result", (result)=> console.log(result));
    // будет ли считаться такой вывод всех операцией через консоль?

    eventCalc.emit('сложение', 1, 2);
    eventCalc.emit('вычитание', 3, 4);
    eventCalc.emit('умножение', 5, 6);
    eventCalc.emit('деление', 7, 8);
