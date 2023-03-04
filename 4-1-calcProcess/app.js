function Calculate() {
    
    const argvs = process.argv;
    const argv = argvs.slice(2);
    const operation = argv[0];
    const operator1 = +argv[1];
    const operator2 = parseInt(argv[2]);

    if (operation === 'сложение') {
        console.log(operation + ' равно '
            + (operator1 + operator2));
    } 
    else if (operation === 'вычитание') {
        console.log(operation + ' равно '
            + (operator1 - operator2));
    } 
    else if (operation === 'умножение') {
        console.log(operation + ' равно '
            + (operator1 * operator2));
    }
    else if (operation === 'деление') {
        console.log(operation + ' равно '
            + (operator1 / operator2));
    }
}

module.exports = Calculate();

