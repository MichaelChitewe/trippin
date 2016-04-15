module.exports = function(totalList) {

  var total = 0;

  totalList.forEach(function(yolo) {
    total += yolo.Trips;

  })

  return total;
}
