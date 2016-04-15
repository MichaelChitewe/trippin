module.exports = function(kombis, regNumber){

//first solution (works)

//   var taxis = [];
//   for (var i = 0; i < kombis.length; i++){
//   if(kombis[i].RegistrationNumber === regNumber){
//     taxis.push(kombis[i]);
//   }
// }
// return taxis;

//second solution (works)

var results = kombis.filter(function (k) {
  return k.RegistrationNumber === regNumber;
 });
return results;


}
