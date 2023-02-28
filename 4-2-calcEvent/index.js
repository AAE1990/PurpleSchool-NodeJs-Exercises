const MyEmitter = require('events');

class myEmitter extends MyEmitter {
    log = (number) => {
        console.log(number);
        this.emit('сложение', 1, 2);
        this.emit('вычитание', 3, 4);
        this.emit('умножение', 5, 6);
        this.emit('деление', 7, 8);
    }
}

module.exports = myEmitter;