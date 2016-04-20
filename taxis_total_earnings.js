module.exports = function(vans) {

  var totalEarnings = {};

  for (var i = 0; i < vans.length; i++) {

    var taxis = vans[i].RegistrationNumber;
    var earnings = vans[i].Trips * vans[i].Fare;

    if (!totalEarnings.hasOwnProperty(taxis)) {
      totalEarnings[taxis] = 0;
    }

    totalEarnings[taxis] = totalEarnings[taxis] + earnings;

  }
  console.log(totalEarnings);
  return totalEarnings;

}


//second solution works

//   var totalEarnings = {};
//
//   vans.forEach(function(h){
//
//     var taxi = h.RegistrationNumber;
//     var earnings = h.Trips * h.Fare;
//
//       if(!totalEarnings.hasOwnProperty(taxi)){
//        totalEarnings[taxi] = 0;
//       }
//
//    totalEarnings[taxi] = totalEarnings[taxi] + earnings;
//
//   });
//
//   console.log((totalEarnings));
// return(totalEarnings);
