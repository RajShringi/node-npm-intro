import moment from "moment";

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));
let date1 = moment("2020-01-01");
console.log(date1.isValid());
let date2 = moment("2020-14-01");
console.log(date2.isValid());

console.log(moment().add(7, "days").calendar());
console.log(moment().add(7, "months").calendar());
console.log(moment().add(7, "years").calendar());

console.log(moment().subtract(7, "days").calendar());
console.log(moment().subtract(7, "months").calendar());
console.log(moment().subtract(7, "years").calendar());

let a = moment("2014-11-11");
let b = moment("2015-09-11");
console.log(b.diff(a, "days"));

let c = moment("2014-11-27");
let d = moment("2015-09-16");
console.log(d.diff(c, "days"));

console.log(moment("2020-01-01").isAfter("2018-01-01"));
console.log(moment("2010-01-01").isAfter("2018-01-01"));

console.log("Leap:", moment("2019").isLeapYear());
console.log("Leap:", moment("2020").isLeapYear());

console.group("lodash");
const lodash = require("lodash");
let arr = ["a", "b", "c", "d"];
console.log(lodash.chunk(arr, 3));

console.log(lodash.compact([0, 1, false, 2, "", 3]));

var array = [1];
var other = lodash.concat(array, 2, [3], [[4]]);
console.log(other);

console.log(lodash.difference([2, 1], [2, 3]));

console.log(lodash.drop([1, 2, 3], 1));

lodash.forEach([1, 2], function (value) {
  console.log(value);
});

console.log(lodash.includes([1, 2, 3], 1));

var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: false },
];
console.log(lodash.every(users, { user: "barney", active: false }));

function square(n) {
  return n * n;
}
console.log(lodash.map([4, 8], square));

console.log(lodash.reject(users, { age: 40 }));

console.groupEnd();
