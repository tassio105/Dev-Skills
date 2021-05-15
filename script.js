// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(x));
*/
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4]);
calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
// Concatinating arrays
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) Fix bug
    value: Number(prompt('Degrees celsius:')),
  };

  // B) Find bug
  console.log(measureKelvin.value);
  //   console.warn(measureKelvin.value);
  //   console.error(measureKelvin.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify bug
console.log(measureKelvin());
*/

/*Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let loop1 = arr[0];
  let loop2 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (loop1[i] < loop1.length - 1) firstElement = loop1[i];
    if (loop2[i] < loop2.length - 1) firstElement = loop2[i];
    //   console.log(`... ${loop1[i]} in ${i + 1} days ...`);
  }

  return loop1, loop2;
};
console.log(printForecast(data1, data2));
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log(str);
};
printForecast(data1);
printForecast(data2);
