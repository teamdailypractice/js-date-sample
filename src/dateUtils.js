function getDate(dateAsYYYYmmdd) {
  if (dateAsYYYYmmdd && dateAsYYYYmmdd.length === 8) {
    const year = Number.parseInt(dateAsYYYYmmdd.substring(0, 4), 10);
    const month = Number.parseInt(dateAsYYYYmmdd.substring(4, 6), 10);
    const day = Number.parseInt(dateAsYYYYmmdd.substring(6, 8), 10);
    if (year < 1970) {
      throw new Error("Year starts from 1970. No support for year < 1970");
    }
    if (month < 0 || month > 11) {
      throw new Error("Invalid Month");
    }
    if (day < 1 || day > 31) {
      //TODO: Switch  - case - Feb 28/29 leap year
      throw new Error("Invalid date");
    }
    return new Date(year, month, day);
  }
  else {
    throw new Error("Invalid Date: " + dateAsYYYYmmdd);
  }

}
module.exports = getDate;
