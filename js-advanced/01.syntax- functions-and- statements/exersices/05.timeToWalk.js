function timeToWalk(steps, footprint, speed) {
  let minWalks = ((steps * footprint) / 1000 / speed) * 60;
  let restTime = Math.floor((steps * footprint) / 500);
  let totalTimeInSeconds = (minWalks + restTime) * 60;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  while (totalTimeInSeconds !== 0) {
    if (totalTimeInSeconds > 3600) {
      hours++;
      totalTimeInSeconds -= 3600;
    } else if (totalTimeInSeconds < 3600 && totalTimeInSeconds >= 60) {
      minutes += (totalTimeInSeconds - (totalTimeInSeconds % 60)) / 60;
      totalTimeInSeconds -= minutes * 60;
    } else {
      seconds += totalTimeInSeconds;
      totalTimeInSeconds -= seconds;
    }
  }
  if (hours < 10) {
    console.log(`0${hours}:${minutes}:${seconds.toFixed(0)}`);
  } else if(hours >= 10) {
    console.log(`${hours}:${minutes}:${seconds.toFixed(0)}`);
  }else if(minutes < 10) {
    console.log(`${hours}:0${minutes}:${seconds.toFixed(0)}`);
  }else if(hours >= 10) {
    console.log(`${hours}:${minutes}:${seconds.toFixed(0)}`);
  }else if(hours >= 10) {
    console.log(`${hours}:${minutes}:${seconds.toFixed(0)}`);
  }else if(hours >= 10) {
    console.log(`${hours}:${minutes}:${seconds.toFixed(0)}`);
  }
}
timeToWalk(4000, 0.6, 5); //00:32:48
timeToWalk(2564, 0.7, 5.5); //00:22:35
