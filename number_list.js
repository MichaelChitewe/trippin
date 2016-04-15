module.exports = function(van, tripNum){

  var list = 0;

    van.forEach(function(c){
        if(c.RegistrationNumber === tripNum){
          list += c.Trips;

        }

  });

console.log(list);
return list;






}
