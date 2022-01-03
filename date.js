//jshint esversion:6
// console.log(module);
module.exports = getDate;

function getDate(kindOfDate) {

  let today  = new Date();

  if (kindOfDate === "day") {
    let options = { weekday: 'long', day: 'numeric', month: 'long' };
    let day = today.toLocaleDateString("en-US", options);
    (console.log(day));
    return day;
  }

  else if (kindOfDate === "year") {
    let options = { year: 'numeric' };
    let year = today.toLocaleDateString("en-US", options);
    (console.log(year));
    return year;
  }

  else return 666;  
}
