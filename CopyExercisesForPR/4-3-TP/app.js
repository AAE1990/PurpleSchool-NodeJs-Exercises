function Timer() {
  const [, , hours, minutes, seconds] = process.argv;

  setTimeout(() => {
    if (`${hours} ${minutes} ${seconds}`) {
      console.log(parseInt(hours) + ' часа(ов) ' + parseInt(minutes) + ' минут(ы) ' + parseInt(seconds) + ' секунд(а)');
    }
  }, 2000); 

}

Timer();
