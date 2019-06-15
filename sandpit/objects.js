var Citizen = function(name='Joe', country='UK') {
  this.name = name;
  this.country = country;
};

Citizen.prototype  = {
  printDetails: function(){
    console.log(this.name + ", " + this.country);
  }
};

var c = new Citizen();
c.printDetails();

c = new Citizen('Bob', 'USA');
c.printDetails();

