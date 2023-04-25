const notifier = require('node-notifier');
const today = new Date();

  function Timer() {
    const [, , hours, minutes, seconds] = process.argv;
  
    setTimeout(() => {
      if (`${hours} ${minutes} ${seconds}`) {
        notifier.notify(parseInt(hours) + ' часа(ов) ' + parseInt(minutes) + ' минут(ы) ' + parseInt(seconds) + ' секунд(а)');
      }
      if (`${hours} ${minutes} ${seconds}`) {
        console.log(today.getMilliseconds( hours, minutes, seconds ));
      }
    }, 1000); 
  
  }
  
  Timer();