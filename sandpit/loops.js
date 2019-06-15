console.log('loops.js');

function testLoops(){
  for (var i in ['a', 'b', 'c']){
    console.log(i);
  }

  var obj = { a: 3, b: 2, c: 1 };

  for (var prop in obj){
    if(obj.hasOwnProperty(prop)){
      console.log("obj." + prop + " = " +  obj[prop]);
    }
  }

  ['Alice', 'Bob', 'Carol'].forEach(function(value, index){
    console.log(index + ': ' + value);
  });
};

testLoops();

