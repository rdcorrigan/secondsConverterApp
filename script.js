// MONTHS UNIT ADDED

const formatDuration = (seconds) => {
  let sec, min, hour, day, month, year, time = seconds, arr = [], obj = {};
  if (time == 0) return "now";
  // store # of seconds in object
  if (time >= 60) {
    console.log('seconds:', time);
    sec = time % 60;
    obj["sec"] = sec;
    min = Math.floor(time/60);
    obj["min"] = min;
    time = min;
    if (min < 60) time = 0;
  } else {
    obj["sec"] = time;
  }
  // store # of minutes in object
  if (time >= 60) {
    min = time % 60;
    obj["min"] = min;
    hour = Math.floor(time/60);
    obj["hour"] = hour;
    time = hour;
    if (hour < 24) time = 0;
  }
  // store # of hours in object
  if (time >= 24) {
    hour = time % 24;
    obj["hour"] = hour;
    day = Math.floor(time/24);
    obj["day"] = day;
    time = day;
    if (day < 30.44) time = 0;
  }
  // store # of days in object
  if (time >= 30.44) {
    day = Math.floor(time % 30.44);
    obj["day"] = day;
    month = Math.floor(time/30.44);
    obj["month"] = month;
    time = month;
    if (month < 12) time = 0;
  }
  // store # of months and years in object
  if (time >= 12) {
    month = time % 12;
    obj["month"] = month;
    year = Math.floor(time/12);
    obj["year"] = year;
  }
  // create string array with object values
  // SECONDS
  if (obj["sec"]) {
    if (obj["min"] || obj["hour"] || obj["day"] || obj["month"] || obj["year"]) {
      if (obj["sec"] === 1) {
        arr.unshift(" and 1 second")
      } else {
        arr.unshift(" and " + sec.toString() + " seconds");
      }
     } else {
        if (obj["sec"] === 1){
          return "1 second";
        } else {
          return sec.toString() + " seconds";
        }
     }
    }
  // MINUTES
  if (obj["min"]) {
    if (obj["hour"] || obj["day"] || obj["month"] || obj["year"]) {
      if (!arr.length) {
        if (obj["min"] === 1) {
          arr.unshift(" and 1 minute");
      } else {
        arr.unshift(" and " + min.toString() + " minutes");
       }
    } else {
        if (obj["min"] === 1) {
          arr.unshift(", 1 minute");
    } else {
      arr.unshift(", " + min.toString() + " minutes")
      }
    }
   } else {
     if (obj["min"] === 1) {
       arr.unshift("1 minute");
     } else {
       arr.unshift(min.toString() + " minutes");
     }
   }
  }
  // HOURS
  if (obj["hour"]) {
    if (obj["day"] || obj["month"] || obj["year"]) {
      if (!arr.length) {
        if (obj["hour"] === 1) {
          arr.unshift(" and 1 hour");
        } else {
          arr.unshift(" and " + hour.toString() + " hours");
        }
      } else {
        if (obj["hour"] === 1) {
          arr.unshift(", 1 hour");
        } else {
          arr.unshift(", " + hour.toString() + " hours");
        }
      }
    } else {
      if (obj["hour"] === 1) {
        arr.unshift("1 hour");
      } else {
        arr.unshift(hour.toString() + " hours");
      }
    }
  }
  // DAYS
  if (obj["day"]) {
    if (obj["month"] || obj["year"]) {
      if (!arr.length) {
        if (obj["day"] === 1) {
          arr.unshift(" and 1 day");
        } else {
          arr.unshift(" and " + day.toString() + " days");
        }
      } else {
        if (obj["day"] === 1) {
          arr.unshift(", 1 day");
        } else {
          arr.unshift(", " + day.toString() + " days");
        }
      }
    } else {
      if (obj["day"] === 1) {
        arr.unshift("1 day");
      } else {
        arr.unshift(day.toString() + " days");
      }
    }
  }
  // MONTHS
  if (obj["month"]) {
    if (obj["year"]) {
      if (!arr.length) {
        if (obj["month"] === 1) {
          arr.unshift(" and 1 month");
        } else {
          arr.unshift(" and " + month.toString() + " months");
        }
      } else {
        if (obj["month"] === 1) {
          arr.unshift(", 1 month");
        } else {
          arr.unshift(", " + month.toString() + " months");
        }
      }
    } else {
      if (obj["month"] === 1) {
        arr.unshift("1 month");
      } else {
        arr.unshift(month.toString() + " months");
      }
    }
  }
  // YEARS
  if (obj["year"]) {
    if (!arr.length) {
      if (obj["year"] === 1) {
        return "1 year";
      } else {
        return year.toString() + " years";
      }
    } else {
      if (obj["year"] === 1) {
        arr.unshift("1 year");
      } else {
        arr.unshift(year.toString() + " years");
      }
    }
  }
   return arr.join("");
}


// console.log(formatDuration(76554));

const convert = () => {
  const value = document.querySelector('input').value, 
  appendDiv = document.createElement('div'), 
  div = document.querySelector('#appendToMe'), 
  output = formatDuration(value);
  if (value.length) {
    appendDiv.append(value + " seconds equals to " + output);
    appendDiv.classList.add('output')
    div.append(appendDiv);
  }
}

const clear = () => {
  let input = document.querySelector('input');
  input.value = "";
}

const input = document.querySelector('#input'), 
convertButton = document.querySelector('#convert'), 
clearButton = document.querySelector('#clear'), 
resetAll = document.querySelector('#reset');

input.addEventListener('keydown', (event) => {
  if (event.key === "Enter") convert(); });
input.addEventListener('keydown', (event) => {
  if (event.key === "Escape") clear();
})
convertButton.addEventListener('click', convert);
clearButton.addEventListener('click', clear);
resetAll.addEventListener('click', 
window.location.reload.bind(window.location));



