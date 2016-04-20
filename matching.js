module.exports = function(vans, regNumber) {

  // first solution (works)
  //
  //   var taxis = [];
  //   for (var i = 0; i < vans.length; i++){
  //   if(vans[i].RegistrationNumber === regNumber){
  //     taxis.push(vans[i]);
  //   }
  // }
  // return taxis;
  //
  // second solution (works)

  // var results = vans.filter(function(k) {
  //   return k.RegistrationNumber === regNumber;
  // });
  // return results;

  //third solution(works)

  var cars = [];

  vans.forEach(function(k) {
    if (k.RegistrationNumber === regNumber) {
      cars.push(k);
    }
    // console.log(car)
    // return car;

  })
  console.log(cars);
  return cars;

}
