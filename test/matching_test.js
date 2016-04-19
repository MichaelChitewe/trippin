var matching = require('../matching');
var assert = require('assert');
var capeTownTaxis = [{
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Bellville",
  "Fare": 13,
  "Trips": 9
}, {
  "RegistrationNumber": "CA 234 567",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Langa",
  "Fare": 8,
  "Trips": 13
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Cape Town",
  "Fare": 13,
  "Trips": 10
}];

var durbanTaxis = [{
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 18
}, {
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 15
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 20
}];


describe(
  "should find all the objects matching a specific condition of taxi CA 123 456 ",
  function() {

    var regList = [{
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Bellville",
      "Fare": 13,
      "Trips": 9
    }, {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    }];

    it("should return filter records of taxi CA 123 456", function() {

      var result = matching(capeTownTaxis, 'CA 123 456');
      assert.deepEqual(result, regList);
    });
  })

describe(
  "should find all the objects matching a specific condition of taxi ND 123 456 ",
  function() {

    it("should return filter records of taxi ND 123 456", function() {

      var regList = [{
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - University of KZN",
        "Fare": 7,
        "Trips": 14
      }, {
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - Umbilo",
        "Fare": 8,
        "Trips": 15
      }, ];

      var result = matching(durbanTaxis, 'ND 123 456');
      assert.deepEqual(result, regList);
    });
  })
