function Timer() {
  const [, , hours, minutes, seconds] = process.argv;
  const today = new Date();

  setTimeout(() => {
    if (`${hours} ${minutes} ${seconds}`) {
      console.log(parseInt(hours) + ' часа(ов) ' + parseInt(minutes) + ' минут(ы) ' + parseInt(seconds) + ' секунд(а)');
    }
    if (`${hours} ${minutes} ${seconds}`) {
      console.log(today.getMilliseconds( hours, minutes, seconds ));
    }
    
  }, 2000); 

}

Timer();
