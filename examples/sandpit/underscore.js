// Whereas JS arrays have a set of native functional iterator methods (map,
// reduce, filter, every, sum, reduceRight), Objects - in their guise as
// pseudo-dictionaries - don't. 
// "underscore" is a functional library for JS as ubiquitous as jQuery.
// underscore methods are accessed with the shorthand _
//
console.log("underscore.js");

var journeys = [
  { period: 'morning', times: [44, 34, 56, 31] },
  { period: 'evening', times: [35, 33] },
  { period: 'morning', times: [24, 45, 27] },
  { period: 'evening', times: [33, 29, 35, 41] },
  { period: 'morning', times: [18, 23, 28] }
];

var groups = _.groupBy(journeys, 'period');
var morning_times =_.flatten(_.pluck(groups['morning'], 'times'));
var average = function(list){
  var sum = _.reduce(list, function(prev, curr){ return prev + curr; }, 0);
  return sum / list.length;
};

console.log('Average morning time: ' + average(morning_times));

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = nums.filter(function(n){ return n % 2; })
  .map(function(n){ return n * n; })
  .reduce(function(a, b){ return a + b; });

console.log('Sum of the odd squares is: ' + sum);

