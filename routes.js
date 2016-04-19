module.exports = function(cool, go) {

  var way = [];

  cool.forEach(function(c) {
    if (c.RegistrationNumber === go) {
      way.push(c.Route);

    }

  });
  console.log(way);
  return way;

}
