module.exports = function(ching){


    var total = ching.map(function(yolo){
      return{
        taxi: yolo.RegistrationNumber === "defined",
        earnings:(yolo.Trips * yolo.Fare)

      }
    })

return total;
}
