function getMonthNumberForApi(userMonthNumber) {
  return userMonthNumber - 1;
}

function getMonthNumberForUser(apiMonthNumber) {
  return apiMonthNumber + 1;
}

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

function parseStringToInteger(input) {
  let intValue = -1;
  if (input) {
    intValue = Number.parseInt((input + "".trim()), 10);
  } else {
    throw new Error("invalid input: " + input);
  }
  return intValue;

}
function validateMonth(month) {
  if (month) {
    const givenMonth = parseStringToInteger(month);

    if (givenMonth < 1 || givenMonth > 12) {
      throw new Error("Month should be between: 1 to 12. 1 = Jan, 2=Feb,...12=Dec");
    }
  } else {
    return false;
  }
  return true;
}

function validateYear(year) {
  if (year) {
    const givenYear = parseStringToInteger(year);

    if (givenYear < 1970) {
      throw new Error("Year starts from 1970. Not supported: year < 1970");
    }
  } else {
    return false;
  }
  return true;
}
function getDate(dateAsYYYYmmdd) {
  if (dateAsYYYYmmdd && dateAsYYYYmmdd.length === 8) {
    const year = Number.parseInt(dateAsYYYYmmdd.substring(0, 4), 10);
    const month = Number.parseInt(dateAsYYYYmmdd.substring(4, 6), 10);
    const day = Number.parseInt(dateAsYYYYmmdd.substring(6, 8), 10);
    if (year < 1970) {
      throw new Error("Year starts from 1970. No support for year < 1970");
    }
    if (month < 1 || month > 12) {
      throw new Error("Invalid Month");
    }
    if (day < 1 || day > 31) {
      //TODO: Switch  - case - Feb 28/29 leap year
      throw new Error("Invalid date");
    }
    return new Date(year, getMonthNumberForApi(month), day);
  }
  else {
    throw new Error("Invalid Date: " + dateAsYYYYmmdd);
  }

}

// month : 1 to 12
// is the input to this API, provided by the user?
// Who is the client of this API? User or another function?
// For user: month = 1 to 12. Day = 1 to 7. Days = 1 to 28/29/30/31
// For internal API = use as per Javascript standard Date Api based index
function getNumberOfDaysIn(year, month) {

  let numberOfDays = 0;

  if (validateYear(year) && validateMonth(month)) {
    const monthGiven = parseStringToInteger(month);
    const yearGiven = parseStringToInteger(year);

    
    switch (monthGiven) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        numberOfDays = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        numberOfDays = 30;
        break;
      case 2:
        numberOfDays = 28;
        if (isLeapYear(yearGiven)) {
          numberOfDays = 29;
        }
        break;
    }
  }
  if (numberOfDays === 0) {
    throw new Error(`Invalid year or month - year: ${year} month: ${month}`);
  }
  return numberOfDays;
}


function getLastDate(dateAsYYYYmmdd) {
  const firstDayOfMonth = getDate(dateAsYYYYmmdd + "".trim().substring(0, 6) + "01");
  const lastDate = getNumberOfDaysIn(firstDayOfMonth.getFullYear(), getMonthNumberForUser(firstDayOfMonth.getMonth()));
  return firstDayOfMonth.getFullYear().toString() +
    getMonthNumberForUser(firstDayOfMonth.getMonth()).toString().padStart(2, '0') +
    lastDate.toString();

}

module.exports = {
  getDate,
  getLastDate
};
