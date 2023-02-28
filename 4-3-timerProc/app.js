function Timer() {

    const argvs = process.argv;
    const argv = argvs.slice(2);
    const operation = argv[0];
    const timeCall = '5 часов 10 минут 1 секунда';
  
    setTimeout(() => {
      if (operation === 'Таймер') {
        console.log(operation + ' вызова');
      }
    }, 2000); //нужно вызвать команду "Таймер вызова".
  
    console.log(timeCall);
  }
  
  Timer();
  
   /*  setTimeout(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      console.log(hours + " Час(ов): " + minutes + " минут: " + seconds + " секунд");    
    }, 0);
  
    setImmediate(() => {
      if (operation === 'Таймер') {
        console.log(operation + ' вызова');
      }
    })
    //Это я задачу не так понял и сделал сначала это :)
     */