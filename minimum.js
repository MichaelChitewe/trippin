module.exports = function(min) {


  var minm = 100;

  min.forEach(function(h) {
    if (h.Trips < minm) {
      minm = h.Trips;
    }

  })
  console.log(minm);
  return minm;


}
