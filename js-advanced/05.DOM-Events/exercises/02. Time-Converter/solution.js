function attachEventsListeners() {
  const rations = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, unit) {
    const inDays = value / rations[unit];
    return {
      days: inDays,
      hours: inDays * rations.hours,
      minutes: inDays * rations.minutes,
      seconds: inDays * rations.seconds,
    };
  }
  // инициализираме полетата за въвеждане
  daysInput = document.querySelector("#days");
  hoursInput = document.querySelector("#hours");
  minutesInput = document.querySelector("#minutes");
  secondsInput = document.querySelector("#seconds");
  // to can test this function I set it to global function
  //window.convert = convert;

  // инициализираме бутоните на полетата за въвеждане
  document.querySelector("main").addEventListener("click", onConvert);

  function onConvert(ev) {
    if (ev.target.tagName == "INPUT" && ev.target.type == "button") {
      const input = ev.target.parentElement.querySelector(
        'input[type = "text"]'
      );
      const time = convert(Number(input.value), input.id);
      // вземаме стойността, която е въведена от полето и я присвояваме на time със съответния unit
      daysInput.value = time.days;
      hoursInput.value = time.hours;
      minutesInput.value = time.minutes;
      secondsInput.value = time.seconds;
    }
  }
}
