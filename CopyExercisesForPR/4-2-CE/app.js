const MyEmitter = require('events');
const eventCalc = new MyEmitter();

[, , action, num1, num2] = process.argv;

eventCalc.on("add", (a, b) => {
    let sum = a + b;
    console.log("сложение", a, "+", b, "=", sum);
    eventCalc.emit('result', sum);
});

eventCalc.on("sub", (a, b) => {
    let sum = a - b;
    console.log("вычитание", a, "-", b, "=", sum);
    eventCalc.emit('result', sum);
});

eventCalc.on("mult", (a, b) => {
    let sum = a * b;
    console.log("умножение", a, "*", b, "=", sum);
    eventCalc.emit('result', sum);
});

eventCalc.on("div", (a, b) => {
    let sum = a / b;
    console.log("деление", a, "/", b, "=", sum);
    eventCalc.emit('result', sum);
});

if (action == "add") {
    eventCalc.emit("add", parseInt(num1), parseInt(num2))
} else if
    (action == "sub") {
    eventCalc.emit("sub", parseInt(num1), parseInt(num2))
} else if
    (action == "mult") {
    eventCalc.emit("mult", parseInt(num1), parseInt(num2))
} else if
    (action == "div") {
    eventCalc.emit("div", parseInt(num1), parseInt(num2))
};


// Я долго думал над тем как process.argv сделать с эмиттером, а пока думал прошел основной курс по ноде.
// Получилось, но можно и надо сделать код короче.