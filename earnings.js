module.exports = function(n, earn) {

  var all = 0;

  n.forEach(function(j) {
    if (j.RegistrationNumber === earn) {
      all += j.Fare * j.Trips;
    }

  })
  console.log(all);
  return all;

}
