const notifier = require('node-notifier');

  function Timer() {
    const [, , hours, minutes, seconds] = process.argv;
  
    setTimeout(() => {
      if (`${hours} ${minutes} ${seconds}`) {
        notifier.notify(parseInt(hours) + ' часа(ов) ' + parseInt(minutes) + ' минут(ы) ' + parseInt(seconds) + ' секунд(а)');
      }
    }, 1000); 
  
  }
  
  Timer();