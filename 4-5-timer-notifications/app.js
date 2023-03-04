const notifier = require('node-notifier');

function Timer() {

    const argvs = process.argv;
    const argv = argvs.slice(2);
    const operation = argv[0];
    const timeCall = '5 часов 10 минут 1 секунда';
  
    setTimeout(() => {
      if (operation === 'Таймер') {
        console.log(operation + ' вызова');
        notifier.notify(timeCall);
      }
    }, 2000); //нужно вызвать команду "Таймер вызова".

  }
  
  Timer();

  //коммент для пул реквеста в ветку new_branch

/* function Timer() {
    const argvs = process.argv;
    const argv = argvs.slice(2);
    const operation = argv[0];

    setTimeout(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        notifier.notify(hours + " Час(ов): " + minutes + " минут: " + seconds + " секунд");
    }, 2000);

    setImmediate(() => {
        if (operation === 'Таймер') {
            console.log(operation + ' вызова');
        }
    })

}

Timer();
    //Мне кажется так красивее, реальное время вывода :)

 */