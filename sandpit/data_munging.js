var studentData = [
  { name: 'Bob', id: 0, 'scores': [68, 75, 76, 81] },
  { 'name': 'Carol', id: 1, 'scores': [75, 90, 64, 88] },
  { name: 'Dan', id: 2, scores: [64, 58, 53, 62] }
];

function process(data, passThreshold, meritThreshold) {
  "use strict";

  passThreshold = typeof passThreshold !== 'undefined' ? passThreshold : 60;
  meritThreshold = typeof meritThreshold !== 'undefined' ? meritThreshold : 75;

  data.forEach(function(d){
    d.avg_score = d.scores.reduce(function(prev, curr){
      return prev + curr;
    }, 0) / d.scores.length;

    if(d.avg_score > meritThreshold){
      d.result = 'passed with merit';
    }
    else if(d.avg_score > passThreshold){
      d.result = 'passed';
    }
    else{
      d.result = 'failed';
    }

    console.log(d.name + "'s (id: " + d.id + ") result is: " + d.result.toUpperCase());
  });
};

process(studentData);

