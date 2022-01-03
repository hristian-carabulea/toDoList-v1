//jshint esversion:6
// console.log(module);
module.exports = getDate;

function getDate(kindOfDate) {

  let today  = new Date();

  if (kindOfDate === "day") {
    let options = { weekday: 'long', day: 'numeric', month: 'long' };
    return today.toLocaleDateString("en-US", options);
  }

  else if (kindOfDate === "year") {
    let options = { year: 'numeric' };
    return today.toLocaleDateString("en-US", options);
  }

  else return 666;  
}
