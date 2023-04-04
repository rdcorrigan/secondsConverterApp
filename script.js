// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes 
// and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. 
// The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration 
// specified by of a component must not be greater than any valid more significant unit of time.


const formatDuration = (seconds) => {
  let sec, min, hour, day, year, time = seconds, arr = [], obj = {};
  debugger;
  if (seconds == 0) return "now";
  // store # of seconds in object
  if (time >= 60) {
    sec = time % 60;
    obj["sec"] = sec;
    min = Math.floor(time/60);
    obj["min"] = min;
    time = min;
    if (time < 60) time = 0;
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
  }
  // store # of hours in object
  if (time >= 24) {
    hour = time % 24;
    obj["hour"] = hour;
    day = Math.floor(time/24);
    obj["day"] = day;
    time = day;
  }
  // store # of days and years in object
  if (time >= 365) {
    day = time % 365;
    obj["day"] = day;
    year = Math.floor(time/365);
    obj["year"] = year;
  }
  // create string array with object values
  if (obj["sec"]) {
    if (obj["min"] || obj["hour"] || obj["day"] || obj["year"]) {
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
  if (obj["min"]) {
    if (obj["hour"] || obj["day"] || obj["year"]) {
      if (arr.length < 1) {
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
  if (obj["hour"]) {
    if (obj["day"] || obj["year"]) {
      if (arr.length < 1) {
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
  if (obj["day"]) {
    if (obj["year"]) {
      if (arr.length < 1) {
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
  if (obj["year"]) {
    if (arr.length < 1) {
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

const convert = () => {
  const value = document.querySelector('input').value, 
  appendDiv = document.createElement('div'), 
  div = document.querySelector('#appendToMe'), 
  output = formatDuration(value);
  if (value.length > 0) {
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

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) convert(); });
convertButton.addEventListener('click', convert);
clearButton.addEventListener('click', clear);
resetAll.addEventListener('click', 
window.location.reload.bind(window.location));

