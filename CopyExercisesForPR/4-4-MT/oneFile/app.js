const GenDivisor = () => {

    const subArray = () => {
        let n = 300000;
        let divisor = [];
    
        if (n % 3 == 0) {
            divisor.push(3);
            n = Math.round(n / 3);
            let max = n / 2;
            for (let i = 2; i <= max; i++) {
                if (n % i == 0) {
                    divisor.push(3 * i);
                };
            };
            divisor.push(3 * n);
        };
        // console.log(divisor);
        
        let size = 6; //размер подмассива
        let subarray = []; //массив в который будет выведен результат.
        for (let i = 0; i <Math.ceil(divisor.length/size); i++){
            subarray[i] = divisor.slice((i*size), (i*size) + size);
        }
        return subarray;
    }

    performance.mark('start');
    const result = [
        subArray()
    ]
    console.log(result);

    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main'));
}

GenDivisor();

